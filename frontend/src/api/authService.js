const API = 'http://localhost:5000/api/auth';

export const loginUser = async (credentials) => {
  const res = await fetch(`${API}/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(credentials),
  });
  if (!res.ok) throw new Error('Login failed');
  return res.json();
};

export const registerUser = async (data) => {
  const res = await fetch(`${API}/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error('Registration failed');
  return res.json();
};