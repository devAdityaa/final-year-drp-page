
import React from "react";
import Navigation from "@/components/Navigation";

const Documentation: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#f8f9fe]">
      <Navigation />
      
      <main className="flex-1 max-w-7xl mx-auto px-4 py-8 w-full">
        <h1 className="text-3xl font-bold text-center mb-8">Documentation</h1>
        
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold mb-4">How to Use the Platform</h2>
          <p className="mb-6 text-gray-700">
            This documentation provides guidance on how to use the Protein Status Predictor platform
            for COVID-19 research, including data input formats, model selection, and interpretation of results.
          </p>
          
          <h3 className="text-xl font-bold mb-3">Protein Prediction</h3>
          <p className="mb-4 text-gray-700">
            The platform allows researchers to analyze protein interactions related to COVID-19.
            Select a protein data entry and a prediction model to generate insights about potential interactions.
          </p>
          
          <h3 className="text-xl font-bold mb-3">Drug Repurposing</h3>
          <p className="mb-4 text-gray-700">
            Our drug repurposing research identifies existing medications that could potentially be
            used to treat COVID-19 by targeting specific viral proteins. The database includes information
            about drug candidates, their interactions with COVID-19 proteins, and supporting scientific evidence.
          </p>
          
          <h3 className="text-xl font-bold mb-3">API Access</h3>
          <p className="text-gray-700">
            For programmatic access to our models and data, researchers can use our REST API.
            Contact our team for API documentation and access credentials.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Documentation;
