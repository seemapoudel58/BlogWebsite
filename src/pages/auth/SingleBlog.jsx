import React, { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import { Link, useNavigate, useParams } from "react-router-dom";
import { baseUrl } from "../../config";
import axios from "axios";
import Loading from "../Loading";

const SingleBlog = () => {
  const [blog, setBlog] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();

  const createdAt = blog.userId?.createdAt
    ? new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
      }).format(new Date(blog.userId.createdAt))
    : "N/A";

  const deleteBlog = async () => {
    try {
      const response = await axios.delete(`${baseUrl}/blog/${id}`, {
        headers: {
          "Authorization": localStorage.getItem('token')
        },
      });
      if (response.status === 200) {
        navigate("/");
      } else {
        alert("Error deleting blog");
      }
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  const fetchBlogDetail = async () => {
    try {
      const response = await axios.get(`${baseUrl}/blog/${id}`);
      console.log(response);
      if (response.status === 200) {
        setBlog(response.data.data);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      if (error.response) {
        console.log(error.response.data.message);
      } else {
        console.log(error.message);
      }
    }
  };

  useEffect(() => {
    fetchBlogDetail();
  }, [id]);

  return (
    <Layout>
      {loading ? (
        <Loading />
      ) : (
        <div className="bg-gray-100 dark:bg-gray-800 py-8">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row -mx-4">
              <div className="md:flex-1 px-4">
                <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                  <img
                    className="w-full h-full object-cover"
                    src={blog?.imageUrl}
                    alt="Product Image"
                  />
                </div>
                <div className="flex -mx-2 mb-4">
                  <div className="w-1/2 px-2">
                    <Link to="/blog/edit">
                      <button className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">
                        Edit
                      </button>
                    </Link>
                  </div>
                  <div className="w-1/2 px-2">
                    <button
                      className="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600"
                      onClick={() => deleteBlog(blog._id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
              <div className="md:flex-1 px-4">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                  Blog Title
                </h2>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  {blog?.title}
                </p>
                <div className="flex mb-4">
                  <div className="mr-4">
                    <span className="font-bold text-gray-700 dark:text-gray-300 mr-1">
                      Category :
                    </span>
                    <span className="text-gray-600 dark:text-gray-300">
                      {blog?.category}
                    </span>
                  </div>
                  <div>
                    <span className="font-bold text-gray-700 dark:text-gray-300 mr-1">
                      Published At :
                    </span>
                    <span className="text-gray-600 dark:text-gray-300">
                      {createdAt}
                    </span>
                  </div>
                </div>
                <div>
                  <span className="font-bold text-gray-700 dark:text-gray-300">
                    {" "}
                    Description :
                  </span>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                    {blog?.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default SingleBlog;
