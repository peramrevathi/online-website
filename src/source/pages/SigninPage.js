import React, { useState } from 'react';

const SignInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform sign-in logic here (e.g., API call)
    console.log('Signing in with:', email, password);
    // Reset form fields after submission
    setEmail('');
    setPassword('');
  };

  return (
    <div className='signIn'>
    <form onSubmit={handleSubmit}>
      <h2>Sign In</h2>
      <label>Email:</label>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required /> <br/>
      <label>Password:</label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required /> <br/>
      <button type="submit">Sign In</button>
    </form>
    </div>
  );
};
export default SignInPage