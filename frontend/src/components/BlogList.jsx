import React from "react";
import "./BlogList.css"; // Import the CSS file

const BlogList = ({ blogs }) => {
  return (
    <div className="blog-list">
      {blogs.map((blog) => (
        <div key={blog._id} className="blog-card">
          <p className="blog-username">{blog.username}</p>
          <p className="blog-message">{blog.message}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
