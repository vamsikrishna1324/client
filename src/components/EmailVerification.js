import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { verifyEmail } from '../api';

const EmailVerification = () => {
  const { token } = useParams();
  const [message, setMessage] = useState('Verifying your email...');

  useEffect(() => {
    const verify = async () => {
      try {
        const response = await verifyEmail(token);
        setMessage(response.data.msg);
      } catch (error) {
        console.error(error);
        setMessage('Email verification failed. Please try again.');
      }
    };
    verify();
  }, [token]);

  return <div>{message}</div>;
};

export default EmailVerification;