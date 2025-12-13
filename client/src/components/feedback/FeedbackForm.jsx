import { useState } from 'react';
import { TextField, Button, Box, Slider, FormControl, FormLabel } from '@mui/material';
import toast from 'react-hot-toast';
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';

const FeedbackForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    rating: 3,
    helpful: '',
    improve: '',
    comments: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post('/api/careerhub/api/feedback/', {
        fullname: formData.fullName,
        email: formData.email,
        rating: formData.rating,
        most_valuable_part: formData.helpful,
        need_to_improve: formData.improve,
        suggestions: formData.comments
      });

      toast.success('Feedback submitted successfully!');
      localStorage.setItem('feedbackGiven', 'true');
      onClose();
      setLoading(false);

    } catch (error) {
      console.error('Error submitting feedback:', error);
      toast.error('Failed to submit feedback. Please try again.', {
        duration: 3000,
        onClose: () => {
          setLoading(false);
          onClose();
        }
      });
    }
  };

  return (
    <>
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1, p: 1 }}>
        <TextField
          fullWidth
          label="Full Name"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          sx={{ mb: 2 }}
          required
        />

        <TextField
          fullWidth
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          sx={{ mb: 2 }}
          required
        />

        <FormControl fullWidth sx={{ mb: 2 }}>
          <FormLabel>Rate your experience</FormLabel>
          <Slider
            name="rating"
            value={formData.rating}
            onChange={(e, value) => setFormData(prev => ({ ...prev, rating: value }))}
            min={1}
            max={5}
            marks
            valueLabelDisplay="auto"
          />
        </FormControl>

        <TextField
          fullWidth
          multiline
          rows={1}
          label="Most helpful part?"
          name="helpful"
          value={formData.helpful}
          onChange={handleChange}
          sx={{ mb: 2 }}
          size="medium"
          required
        />

        <TextField
          fullWidth
          multiline
          rows={1}
          label="What needs improvement?"
          name="improve"
          value={formData.improve}
          onChange={handleChange}
          sx={{ mb: 2 }}
          size="medium"
          required
        />

        <TextField
          fullWidth
          multiline
          rows={2}
          label="Other suggestions?"
          name="comments"
          value={formData.comments}
          onChange={handleChange}
          sx={{ mb: 2 }}
          size="small"
        />

        <Box sx={{ mt: 2, display: 'flex', justifyContent: 'flex-end', gap: 1 }}>
          <Button
            variant="outlined"
            onClick={onClose}
            disabled={loading}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={loading}
          >
            {loading ? <CircularProgress size={24} /> : 'Submit'}
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default FeedbackForm;