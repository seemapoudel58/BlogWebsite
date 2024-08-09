import React from "react";
import { FaUserCircle, FaRegClock } from "react-icons/fa";
import { Link } from "react-router-dom";

const Card = ({ blog }) => {

  const createdAt = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  }).format(new Date(blog.userId.createdAt));

  return (
    <Link to ={`/blog/${blog._id}`}>

    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
      <img
        className="w-full h-64 object-cover"
        src={blog.imageUrl}
        alt="Coffee cup"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{blog.title}</div>
        <div className="flex items-center text-gray-500 mb-4">
          <div className="flex items-center space-x-2 mr-4">
            <FaUserCircle />
            <span>{blog.userId.username}</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaRegClock />
            <span>{createdAt}</span>
          </div>
        </div>
        <p className="text-gray-700 text-base">{blog.description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #{blog.category}
        </span>
      </div>
    </div>
    </Link>

  );
};

export default Card;