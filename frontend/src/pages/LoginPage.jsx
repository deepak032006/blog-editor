import { useState } from 'react';
import { loginUser } from '../api/authService';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { token } = await loginUser({ email, password });
      localStorage.setItem('token', token);
      navigate('/editor');
    } catch (err) {
      alert('Login failed');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-sm mx-auto mt-10 p-4 border rounded-lg shadow-md space-y-4"
    >
      <h2 className="text-xl font-bold text-center">Login</h2>
      <input
        className="w-full border p-2 rounded"
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
      />
      <input
        className="w-full border p-2 rounded"
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        required
      />
      <button
        className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        type="submit"
      >
        Login
      </button>
    </form>
  );
};

export default LoginPage;
