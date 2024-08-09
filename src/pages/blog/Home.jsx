import React, { useState, useEffect } from "react";
import Layout from "../../components/layout/Layout";
import Card from "./components/Card/Card";
import { baseUrl } from "../../config";
import axios from "axios";
import Loading from "../Loading";


const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const[loading, setLoading] = useState(true);
  const fetchBlogs = async () => {
    try{

      const response = await axios.get(`${baseUrl}/blog`);
      if(response.status === 200){
        setBlogs(response.data.data);
        setLoading(false);
      }
    }catch(error){
      setLoading(false);
      if (error.response) {
        console.log(error.response.data.message);
      } else {
        console.log('Error:', error.message);
      }
    }
    }

  useEffect(() => {
    fetchBlogs();
  }, []);

   
  return (
    <Layout>
      {loading? (
       <Loading/>
      )  : (
        <div className="flex flex-wrap justify-center mx-auto  mt-12 mb-4">
        {
          blogs.length > 0 && blogs.map((blog)=>{
            return(
              <Card blog={blog}/>
            )
          })
        }
      </div>

      )}
      
    </Layout>
  );
};

export default Home;
