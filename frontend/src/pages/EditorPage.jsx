import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import BlogEditor from '../components/BlogEditor';
import { getBlogById } from '../api/blogService';

const EditorPage = () => {
  const [searchParams] = useSearchParams();
  const blogId = searchParams.get('id');
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    if (blogId) {
      getBlogById(blogId).then(setBlog);
    }
  }, [blogId]);

  return (
    <div className="max-w-4xl mx-auto mt-8 p-4">
      <h1 className="text-2xl font-semibold mb-4">
        {blogId ? 'Edit Blog' : 'New Blog'}
      </h1>
      <BlogEditor blog={blog || {}} />
    </div>
  );
};

export default EditorPage;
