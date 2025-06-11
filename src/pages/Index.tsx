
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section with Background */}
      <div 
        className="relative bg-black text-white py-24 bg-cover bg-center"
        style={{ 
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80")'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Protein Status Predictor for<br />COVID-19
          </h1>
          <p className="text-xl mb-8">
            Advanced protein analysis tool for COVID-19 research
          </p>
        </div>
      </div>
      
      {/* Main Content */}
      <main className="flex-1 bg-[#f8f9fe]">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold text-center mb-8">
            Protein Status Predictor
          </h2>
          
          <div className="bg-white rounded-lg shadow-md p-8 mb-12">
            <h3 className="text-2xl font-bold mb-6 text-center">
              Select Protein and Model
            </h3>
            
            <div className="flex flex-col md:flex-row gap-4 justify-center mb-6">
              <div className="flex-1 flex justify-center">
                <div className="relative w-full max-w-md">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </span>
                  <select className="w-full pl-10 pr-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500">
                    <option>Select Data Entry</option>
                  </select>
                </div>
              </div>
              
              <div className="flex-1 flex justify-center">
                <div className="relative w-full max-w-md">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </span>
                  <select className="w-full pl-10 pr-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500">
                    <option>Select Model</option>
                  </select>
                </div>
              </div>
              
              <Button className="bg-green-500 hover:bg-green-600 text-white px-10">
                Predict
              </Button>
            </div>
            
            <div className="border rounded-lg p-4 min-h-[100px]">
              {/* Results will appear here */}
            </div>
          </div>
          
          {/* Statistics Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-8">
              COVID-19 Statistics
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <h3 className="font-bold mb-4">Global Cases</h3>
                <p className="text-4xl font-bold text-blue-600 mb-2">700M+</p>
                <p className="text-gray-600">Total confirmed cases worldwide</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <h3 className="font-bold mb-4">Protein Interactions</h3>
                <p className="text-4xl font-bold text-blue-600 mb-2">332</p>
                <p className="text-gray-600">Known viral protein interactions</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <h3 className="font-bold mb-4">Research Papers</h3>
                <p className="text-4xl font-bold text-blue-600 mb-2">50K+</p>
                <p className="text-gray-600">Published COVID-19 studies</p>
              </div>
            </div>
          </section>
          
          <div className="text-center">
            <Button asChild className="bg-blue-600 hover:bg-blue-700">
              <Link to="/drug-repurposing">
                Explore Drug Repurposing Research
              </Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
