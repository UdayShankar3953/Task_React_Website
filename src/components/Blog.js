import React from "react";
import './Blog.css';

const Blog = () => {
  return (
    <section className="blog">
      <div className="blog-header">
        <div className="blog-header-text">
          <p className="blog-subtitle">Our blog</p>
          <h2 className="blog-title">Latest Blog Posts</h2>
          <p className="blog-description">
            Tools and strategies modern teams need to help their companies grow.
          </p>
        </div>
        {/* Desktop View Button */}
        <div className="blog-header-button desktop-only">
          <button className="blog-view-all">View all posts</button>
        </div>
      </div>

      <div className="blog-posts">
        {/* Blog Post 1 */}
        <div className="post">
          <img src="\images\dummy-image1.png" alt="UX review" className="post-img" />
          <p className="post-category">Design</p>
          <h3 className="post-title">UX review presentations</h3>
          <p className="post-description">
            How do you create compelling presentations that wow your colleagues
            and impress your managers?
          </p>
          <div className="post-meta">
            <img
              src="/images/dummy-avatar1.png"
              alt="Author"
              className="post-author-img"
            />
            <p className="post-author">Olivia Rhye</p>
            <p className="post-date">20 Jan 2024</p>
          </div>
        </div>

        {/* Blog Post 2 */}
        <div className="post">
          <img src="\images\dummy-image2.png" alt="Migrating to Linear" className="post-img" />
          <p className="post-category">Product</p>
          <h3 className="post-title">Migrating to Linear 101</h3>
          <p className="post-description">
            Linear helps streamline software projects, sprints, tasks, and bug
            tracking. Here's how to get started.
          </p>
          <div className="post-meta">
            <img
              src="/images/dummy-avatar2.png"
              alt="Author"
              className="post-author-img"
            />
            <p className="post-author">Phoenix Baker</p>
            <p className="post-date">19 Jan 2024</p>
          </div>
        </div>

        {/* Blog Post 3 */}
        <div className="post">
          <img src="/images/dummy-image3.png" alt="API stack" className="post-img" />
          <p className="post-category">Software Engineering</p>
          <h3 className="post-title">Building your API stack</h3>
          <p className="post-description">
            The rise of RESTful APIs has been met by a rise in tools for
            creating, testing, and managing them.
          </p>
          <div className="post-meta">
            <img
              src="/images/dummy-avatar3.png"
              alt="Author"
              className="post-author-img"
            />
            <p className="post-author">Lana Steiner</p>
            <p className="post-date">18 Jan 2024</p>
          </div>
        </div>
      </div>

      {/* Mobile View Button */}
      <div className="blog-footer-button mobile-only">
        <button className="blog-view-all">View all posts</button>
      </div>
    </section>
  );
};

export default Blog;
