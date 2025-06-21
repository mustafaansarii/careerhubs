import { useState, useEffect } from 'react';
import axios from "axios";
import { load } from '@cashfreepayments/cashfree-js';
import { Dialog, DialogTitle, DialogContent, IconButton, TextField, Button, Box, Typography, CircularProgress } from '@mui/material';
import { Close } from '@mui/icons-material';
import config from '../config';
import toast from 'react-hot-toast';

function Payment() {
    const [isOpen, setIsOpen] = useState(false);
    const [orderId, setOrderId] = useState("");
    const [cashfree, setCashfree] = useState(null);
    const [paymentDetails, setPaymentDetails] = useState({
        amount: "",
        customerName: "",
        customerEmail: "",
        customerPhone: "",
    });
    const [errors, setErrors] = useState({});
    const [paymentVerified, setPaymentVerified] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const initializeSDK = async () => {
            try {
                const cashfreeInstance = await load({
                    mode: "production",
                });
                setCashfree(cashfreeInstance);
            } catch (error) {
                console.error("Failed to initialize Cashfree SDK:", error);
            }
        };

        initializeSDK();

        const handleOpenModal = () => {
            setIsOpen(true);
        };
        window.addEventListener('openDonateModal', handleOpenModal);
        
        return () => {
            window.removeEventListener('openDonateModal', handleOpenModal);
        };
    }, []);

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const validatePhone = (phone) => {
        return phone.length === 10 && /^\d+$/.test(phone);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setPaymentDetails(prev => ({
            ...prev,
            [name]: value
        }));

        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ""
            }));
        }
    };

    const validateForm = () => {
        const newErrors = {};
        
        if (!paymentDetails.amount || paymentDetails.amount < 1) {
            newErrors.amount = "Please enter a valid amount";
        }
        if (!paymentDetails.customerName) {
            newErrors.customerName = "Name is required";
        }
        if (!paymentDetails.customerEmail || !validateEmail(paymentDetails.customerEmail)) {
            newErrors.customerEmail = "Please enter a valid email address";
        }
        if (!paymentDetails.customerPhone || !validatePhone(paymentDetails.customerPhone)) {
            newErrors.customerPhone = "Please enter a valid 10-digit phone number";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const getSessionId = async () => {
        try {
            let res = await axios.get(config.Pyment_api + '/payment', {
                params: paymentDetails
            });
            if (res.data && res.data.payment_session_id) {
                setOrderId(res.data.order_id);
                localStorage.setItem('paymentOrderId', res.data.order_id);
                return res.data.payment_session_id;
            }
        } catch (error) {
            console.error("Error fetching session ID:", error);
            throw new Error("Failed to get session ID");
        }
    };

    const verifyPayment = async () => {
        const storedOrderId = localStorage.getItem('paymentOrderId');
        if (!storedOrderId) {
            return;
        }

        try {
            let res = await axios.post(config.Pyment_api + '/verify', {
                orderId: storedOrderId
            });
            if (res.status === 200 && res.data.order_status === "PAID") {
                setPaymentVerified(true);
                localStorage.removeItem('paymentOrderId');
                setIsOpen(false);
                toast.success('Thank you for your donation! Payment verified successfully!');
                localStorage.removeItem('paymentOrderId');
            } else {
                toast.error('Payment verification failed');
                localStorage.removeItem('paymentOrderId');
                setIsOpen(false);
            }
        } catch (error) {
            console.error("Error verifying payment:", error);
            toast.error('Payment verification failed');
            setIsOpen(false);
        }
    };

    useEffect(() => {
        const checkPendingPayment = async () => {
            const storedOrderId = localStorage.getItem('paymentOrderId');
            if (storedOrderId) {
                await verifyPayment();
            }
        };
        checkPendingPayment();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!validateForm()) {
            return;
        }

        setIsLoading(true);

        // Stop loading animation after 3 seconds
        setTimeout(() => {
            setIsLoading(false);
        }, 3000);

        if (!cashfree) {
            toast('Payment system is initializing. Please try again in a moment.', { icon: '⏳' });
            setIsLoading(false);
            return;
        }
        
        try {
            const sessionId = await getSessionId();
            if (!sessionId) {
                throw new Error("Failed to get session ID");
            }

            const checkoutOptions = {
                paymentSessionId: sessionId,
                redirectTarget: "_modal",
                onPaymentSuccess: async (data) => {
                    await verifyPayment();
                    setIsOpen(false);
                    setPaymentDetails({
                        amount: "",
                        customerName: "",
                        customerEmail: "",
                        customerPhone: "",
                    });
                },
                onPaymentFailure: (data) => {
                    toast.error('Payment failed. Please try again.');
                    setIsOpen(false);
                    setPaymentDetails({
                        amount: "",
                        customerName: "",
                        customerEmail: "",
                        customerPhone: "",
                    });
                },
            };

            await cashfree.checkout(checkoutOptions);
        } catch (error) {
            console.error("Error during payment process:", error);
            toast.error('Something went wrong. Please try again.');
            setIsOpen(false);
        }
    };

    return (
        <Dialog open={isOpen} onClose={() => !isLoading && setIsOpen(false)} maxWidth="sm" fullWidth>
            <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="h5" fontWeight="bold">Make a Donation</Typography>
                <IconButton onClick={() => setIsOpen(false)}>
                    <Close />
                </IconButton>
            </DialogTitle>
            <DialogContent>
                {paymentVerified ? (
                    <Box sx={{ textAlign: 'center', py: 4 }}>
                        <Typography variant="h5" gutterBottom>
                            Thank you for your donation!
                        </Typography>
                        <Typography variant="body1">
                            Your payment was successful.
                        </Typography>
                    </Box>
                ) : (
                    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
                        <TextField
                            fullWidth
                            margin="normal"
                            label="Amount (₹)"
                            name="amount"
                            type="number"
                            value={paymentDetails.amount}
                            onChange={handleInputChange}
                            error={!!errors.amount}
                            helperText={errors.amount}
                            inputProps={{ min: 1 }}
                        />
                        <TextField
                            fullWidth
                            margin="normal"
                            label="Name"
                            name="customerName"
                            value={paymentDetails.customerName}
                            onChange={handleInputChange}
                            error={!!errors.customerName}
                            helperText={errors.customerName}
                        />
                        <TextField
                            fullWidth
                            margin="normal"
                            label="Email"
                            name="customerEmail"
                            type="email"
                            value={paymentDetails.customerEmail}
                            onChange={handleInputChange}
                            error={!!errors.customerEmail}
                            helperText={errors.customerEmail}
                        />
                        <TextField
                            fullWidth
                            margin="normal"
                            label="Phone"
                            name="customerPhone"
                            value={paymentDetails.customerPhone}
                            onChange={handleInputChange}
                            error={!!errors.customerPhone}
                            helperText={errors.customerPhone}
                            inputProps={{ maxLength: 10 }}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            size="large"
                            disabled={isLoading}
                            sx={{ 
                                mt: 3, 
                                mb: 2, 
                                py: 1.5,
                                position: 'relative',
                                minHeight: '48px'
                            }}
                        >
                            {isLoading ? (
                                <CircularProgress
                                    size={24}
                                    sx={{
                                        color: 'white',
                                    }}
                                />
                            ) : (
                                'Proceed to Pay'
                            )}
                        </Button>
                    </Box>
                )}
            </DialogContent>
        </Dialog>
    );
}

export default Payment;
