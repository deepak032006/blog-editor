const API = 'https://blog-editor-1.onrender.com/api/blogs';

// Save blog as draft (no auth)
export const saveDraft = async (data) => {
  const res = await fetch(`${API}/save-draft`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  return res.json();
};

// Publish blog (requires auth)
export const publishBlog = async (data) => {
  const token = localStorage.getItem('token');
  const res = await fetch(`${API}/publish`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify(data)
  });
  return res.json();
};

// Get all blogs
export const getAllBlogs = async () => {
  const res = await fetch(API);
  return res.json();
};

// Get a blog by ID
export const getBlogById = async (id) => {
  const res = await fetch(`${API}/${id}`);
  return res.json();
};
