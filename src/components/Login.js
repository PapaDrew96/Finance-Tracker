import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { FormWrapper, FormButton, FormInput, ErrorMessage } from './formStyles';

const Login = ({ onLogin, setPage }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const auth = getAuth();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      onLogin({ name: user.email, email: user.email }); // Mock user object
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <FormWrapper>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
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
        <FormButton type="submit">Login</FormButton>
        <p>Don't have an account? <FormButton type="button" onClick={() => setPage('signup')}>Sign Up</FormButton></p>
      </form>
    </FormWrapper>
  );
};

export default Login;
