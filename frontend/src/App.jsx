import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import EditorPage from './pages/EditorPage';
import BlogsPage from './pages/BlogsPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/Register';
import ProtectedRoute from './components/ProtectedRoute';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-right" />
      <Routes>
        <Route path="/" element={<Navigate to="/blogs" replace />} />
        <Route path="/editor" element={<ProtectedRoute><EditorPage /></ProtectedRoute>} />
        <Route path="/blogs" element={<ProtectedRoute><BlogsPage /></ProtectedRoute>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;