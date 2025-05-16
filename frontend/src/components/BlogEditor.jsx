import { useState, useEffect, useRef } from 'react';
import { saveDraft, publishBlog } from '../api/blogService';
import toast from 'react-hot-toast';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const BlogEditor = ({ blog = {}, onSave }) => {
  const [title, setTitle] = useState(blog.title || '');
  const [content, setContent] = useState(blog.content || '');
  const [tags, setTags] = useState(blog.tags?.join(', ') || '');
  const [id, setId] = useState(blog._id || null);
  const timeoutRef = useRef(null);

  const handleAutoSave = () => {
    if (!title && !content) return;
    saveDraft({ id, title, content, tags: tags.split(',').map(tag => tag.trim()) })
      .then(res => {
        setId(res._id);
        toast.success('Auto-saved');
        if (onSave) onSave(res);
      })
      .catch(() => toast.error('Auto-save failed'));
  };

  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      handleAutoSave();
    }, 5000);
    return () => clearTimeout(timeoutRef.current);
  }, [title, content, tags]);

  const handleSave = () => handleAutoSave();
  const handlePublish = () => {
    publishBlog({ id, title, content, tags: tags.split(',').map(tag => tag.trim()) })
      .then(res => {
        toast.success('Published');
        if (onSave) onSave(res);
      })
      .catch(() => toast.error('Publish failed'));
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 border rounded-lg shadow-md space-y-4">
      <input
        className="w-full p-2 border rounded"
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <ReactQuill
        value={content}
        onChange={setContent}
        className="h-40 mb-4"
      />
      <input
        className="w-full p-2 border rounded"
        type="text"
        placeholder="Tags (comma-separated)"
        value={tags}
        onChange={(e) => setTags(e.target.value)}
      />
      <div className="flex gap-4">
        <button onClick={handleSave} className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">Save Draft</button>
        <button onClick={handlePublish} className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Publish</button>
      </div>
    </div>
  );
};

export default BlogEditor;