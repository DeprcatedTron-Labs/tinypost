import React from "react";

const ScheduledPosts = () => {
  // This can later be fetched from a backend API or a state manager
  const posts = [
    {
      id: 1,
      image: "url",
      caption: "Hello World",
      schedule: "2023-08-13 12:00",
    },
  ];

  return (
    <div className="scheduled-posts-container">
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <img src={post.image} alt="Scheduled post thumbnail" />
            <p>{post.caption}</p>
            <time>{post.schedule}</time>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ScheduledPosts;
