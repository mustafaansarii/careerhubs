import { useState, useEffect } from 'react';
import { IconButton, Dialog, DialogContent, DialogTitle } from '@mui/material';
import FeedbackIcon from '@mui/icons-material/Feedback';
import FeedbackForm from './FeedbackForm'
import CloseIcon from '@mui/icons-material/Close';

const FeedbackButton = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const feedbackGiven = localStorage.getItem('feedbackGiven');
    if (feedbackGiven) {
      return; // Do not open if feedback has been given
    }

    // Open the feedback form automatically once after 30 seconds
    const timer = setTimeout(() => {
      setOpen(true);
    }, 30000); // 30 seconds

    return () => clearTimeout(timer); // Clear timeout on unmount
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: 1000 }}>
      <IconButton
        color="primary"
        aria-label="feedback"
        onClick={handleClickOpen}
        style={{ 
          backgroundColor: '#1976d2', 
          color: 'white',
          boxShadow: '0px 3px 5px rgba(0,0,0,0.2)',
          '&:hover': {
            backgroundColor: '#1565c0'
          }
        }}
      >
        <FeedbackIcon />
      </IconButton>

      <Dialog 
        open={open} 
        onClose={handleClose} 
        maxWidth="sm" 
        fullWidth
        PaperProps={{
          sx: {
            position: 'fixed',
            right: 0,
            bottom: 0,
            m: 0,
            width: { xs: '100%', sm: '400px' },
            maxWidth: '100%',
            height: 'auto',
            maxHeight: '70vh',
            borderRadius: 0
          }
        }}
        aria-hidden={!open}
      >
        <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          Provide Feedback
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          <FeedbackForm onClose={handleClose} />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default FeedbackButton;
