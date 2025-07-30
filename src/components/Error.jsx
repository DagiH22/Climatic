import React, { useState, useEffect } from 'react';
import '../styles/Error.css';

function Error({ err }) {
  const [errmsg, setError] = useState('');
  // console.log("error page ",err.response.status)

  useEffect(() => {
    if (err?.status) {
      const status = err.status;

      if (status === 400) {
        setError('Invalid request. Please try again.')
      } else if (status === 401) {
        setError('Authorization failed. Please check API key.')
      } else if (status === 404) {
        setError('City not found. Please enter a valid city name.')
      } else if (status === 429) {
        setError('Too many requests. Try again later.')
      } else if (status === 500) {
        setError('Server error. Please try again shortly.')
      } else {
        setError('Something went wrong. Please try again.')
      }
    } else {
      setError('Network error. Check your internet connection.')
    }

    // console.error(err)
  }, [err]);

  return (
    <div className="error-container">
      <h2>Oops! An error occurred</h2>
      <p>{errmsg}</p>
    </div>
  );
}

export default Error;
