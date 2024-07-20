import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { FormWrapper, FormButton, FormInput, ErrorMessage } from './formStyles';

const Login = ({ onLogin, setPage }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false); // Add loading state

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading state
    const auth = getAuth();

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      onLogin({ name: user.email, email: user.email }); // Mock user object
    } catch (err) {
      setError('Failed to sign in. Please check your email and password.');
      console.error('Sign-in error:', err); // Log the detailed error
    } finally {
      setLoading(false); // End loading state
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
        <FormButton type="submit" disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </FormButton>
        <p>
          Don't have an account?{' '}
          <FormButton type="button" onClick={() => setPage('signup')}>Sign Up</FormButton>
        </p>
      </form>
    </FormWrapper>
  );
};

export default Login;
