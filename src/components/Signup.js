import React, { useState } from 'react';
import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from 'firebase/auth';
import { auth } from '../firebase/firebase';
import { FormWrapper, FormButton, FormInput, ErrorMessage } from './formStyles';

const Signup = ({ onSignup }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await updateProfile(user, { displayName: name });
      await sendEmailVerification(user);

      onSignup(user);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <FormWrapper>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            <FormInput
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Email:
            <FormInput
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Password:
            <FormInput
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
        </div>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <FormButton type="submit">Sign Up</FormButton>
      </form>
    </FormWrapper>
  );
};

export default Signup;
