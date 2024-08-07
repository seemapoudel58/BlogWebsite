import React from "react";
import { useState } from "react";

const Form = ({ type, onSubmit }) => {
  const [data, setData] = useState({
    title: "",
    subtitle: "",
    description: "",
    category: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: name === "image" ? e.target.files[0] : value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(data);

  }


  return (
    <section className="bg-gray-100 py-12">
      <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16 bg-white rounded-lg shadow-lg">
        <h2 className="mb-6 text-2xl font-bold text-gray-900 text-center">
          {type} Blog
        </h2>
        <form action="#" onSubmit={handleSubmit}>
          <div className="grid gap-6 sm:grid-cols-2 sm:gap-8">
            <div className="sm:col-span-1">
              <input
                type="text"
                name="title"
                id="title"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                placeholder="Title*"
                onChange={handleChange}
                required
              />
            </div>
            <div className="sm:col-span-1">
              <input
                type="text"
                name="subtitle"
                id="subtitle"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                placeholder="Subtitle*"
                onChange={handleChange}

              />
            </div>

            <div className="sm:col-span-1">
             
              <input
                type="file"
                name="image"
                id="image"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-600 block w-full p-2.5"
                onChange={handleChange}

              />
            </div>
            <div className="sm:col-span-1">
              <input
                type="text"
                id="category"
                name="category"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-600 block w-full p-2.5"
                placeholder="Category*"
                onChange={handleChange}

              />
            </div>

            <div className="sm:col-span-2">
              <textarea
                id="description"
                name="description"
                rows="6"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-600"
                placeholder="Description*"
                onChange={handleChange}

              ></textarea>
            </div>
          </div>
          <button
            type="submit"
            className="flex items-center mx-auto px-5 py-2.5 mt-6  sm:mt-8 text-sm font-medium text-center text-white bg-blue-900 rounded-lg focus:ring-4 focus:ring-blue-200 hover:bg-blue-800"
          >
            Publish Blog
          </button>
        </form>
      </div>
    </section>
  );
};

export default Form;
