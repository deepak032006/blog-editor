import { useState } from 'react';
import { registerUser, loginUser } from '../api/authService';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // 1. Register user
      await registerUser({ name, email, password });

      // 2. Automatically log in
      const { token } = await loginUser({ email, password });

      // 3. Save token
      localStorage.setItem('token', token);

      // 4. Navigate to editor
      navigate('/editor');
    } catch (err) {
      alert('Registration or login failed');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-sm mx-auto mt-10 p-4 border rounded-lg shadow-md space-y-4"
    >
      <h2 className="text-xl font-bold text-center">Register</h2>
      <input
        className="w-full border p-2 rounded"
        type="text"
        placeholder="Name"
        value={name}
        onChange={e => setName(e.target.value)}
        required
      />
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
        Register
      </button>
    </form>
  );
};

export default RegisterPage;
