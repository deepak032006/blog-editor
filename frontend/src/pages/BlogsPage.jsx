import { useEffect, useState } from 'react';
import { getAllBlogs } from '../api/blogService';
import { Link } from 'react-router-dom';

const BlogsPage = () => {
  const [drafts, setDrafts] = useState([]);
  const [published, setPublished] = useState([]);

  useEffect(() => {
    getAllBlogs().then(data => {
      setDrafts(data.filter(blog => blog.status === 'draft'));
      setPublished(data.filter(blog => blog.status === 'published'));
    });
  }, []);

  return (
    <div className="max-w-3xl mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">Published Blogs</h1>
      <ul className="space-y-2">
        {published.map(blog => (
          <li key={blog._id} className="p-4 border rounded shadow hover:bg-gray-50">
            <Link to={`/editor?id=${blog._id}`} className="text-blue-600 hover:underline">{blog.title}</Link>
          </li>
        ))}
      </ul>

      <h1 className="text-2xl font-bold mt-10 mb-4">Drafts</h1>
      <ul className="space-y-2">
        {drafts.map(blog => (
          <li key={blog._id} className="p-4 border rounded shadow hover:bg-gray-50">
            <Link to={`/editor?id=${blog._id}`} className="text-yellow-600 hover:underline">{blog.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogsPage;