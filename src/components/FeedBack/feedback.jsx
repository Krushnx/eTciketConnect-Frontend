import React, { useState } from 'react';
import axios from 'axios';
import { FaStar } from 'react-icons/fa';
import "./feedback.css";
import Navbar from '../Home/Navbar/Navbar';

const FeedbackForm = () => {
  const [feedback, setFeedback] = useState('');
  const [suggestion, setSuggestion] = useState('');
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const submitFeedback = async () => {
    try {
      const response = await axios.post("http://localhost:8000/api/feedback/submit", { feedback, suggestion, rating });
      console.log(response.data); // Handle success
      setFeedback('');
      setSuggestion('');
      setRating();
    } catch (error) {
      console.error(error); // Handle error
    }
  };

  return (
    <div>
        <Navbar/>
        <div className="feedback-form">
      <h2>Feedback Form</h2>
      <div className="textarea-container">
      <textarea
        placeholder="Enter your feedback..."
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
      />
    </div>
    <div className="textarea-container">
      <textarea
        placeholder="Enter your suggestion..."
        value={suggestion}
        onChange={(e) => setSuggestion(e.target.value)}
      />
    </div>
      <div className="star-rating-container">
        {[...Array(5)].map((star, i) => {
          const ratingValue = i + 1;
          return (
            <label key={i}>
              <input
                type="radio"
                name="rating"
                value={ratingValue}
                style={{ display: 'none' }}
                onClick={() => setRating(ratingValue)}
              />
              <FaStar
                className="star"
                color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                size={24}
                onMouseEnter={() => setHover(ratingValue)}
                onMouseLeave={() => setHover(0)}
              />
            </label>
          );
        })}
      </div>
      <button onClick={submitFeedback}>Submit</button>
    </div>
    </div>
  );
};

export default FeedbackForm;
