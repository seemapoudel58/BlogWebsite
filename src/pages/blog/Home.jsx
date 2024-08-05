import React from "react";
import Layout from "../../components/layout/Layout";
import Card from "./components/Card/Card";

const Home = () => {
  return (
    <Layout>
      <div className="flex flex-wrap justify-center mx-auto  mt-12 mb-4">
        <Card />
        <Card />
        <Card />
      </div>
    </Layout>
  );
};

export default Home;
