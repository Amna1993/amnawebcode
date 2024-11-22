import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-5xl font-bold mb-6">Build Your Dream Website Today!</h1>
      <p className="text-lg mb-8">Professional websites tailored for your business needs.</p>
      <Link to="/get-quote">
        <button className="bg-blue-500 hover:bg-blue-600 px-6 py-3 text-white font-bold rounded">
          Get Your Website Today!
        </button>
      </Link>
    </div>
  );
}

export default Home;
