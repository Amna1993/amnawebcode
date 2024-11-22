import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

function GetQuote() {
  const [services, setServices] = useState([]);
  const [addOns, setAddOns] = useState([]);
  const navigate = useNavigate(); // Initialize useNavigate
  const basePrices = { business: 1000, ecommerce: 1500, portfolio: 800 };
  const addOnPrices = { seo: 200, analytics: 150, maintenance: 100 };

  const calculateTotal = () => {
    const servicePrice = services.reduce((total, service) => total + basePrices[service], 0);
    const addOnPrice = addOns.reduce((total, addOn) => total + addOnPrices[addOn], 0);
    return servicePrice + addOnPrice;
  };

  const handleContinue = () => {
    navigate("/signup"); // Navigate to the Signup page
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col justify-center items-center">
      {/* Header */}
      <h1 className="text-4xl font-extrabold mb-8 text-center">
        Customize Your Website Package
      </h1>

      {/* Main Container */}
      <div className="bg-gray-800 shadow-lg rounded-lg p-8 w-full max-w-4xl">
        {/* Service Selection */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-4">Choose Your Service Type</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {Object.keys(basePrices).map((service) => (
              <button
                key={service}
                onClick={() =>
                  setServices((prev) =>
                    prev.includes(service) ? prev.filter((s) => s !== service) : [...prev, service]
                  )
                }
                className={`p-4 rounded-lg border-2 ${
                  services.includes(service) ? "bg-blue-600 border-blue-400" : "bg-gray-700 border-gray-600"
                } hover:border-blue-400 transition duration-300`}
              >
                <h3 className="text-xl font-semibold">
                  {service.charAt(0).toUpperCase() + service.slice(1)}
                </h3>
                <p className="text-gray-300 mt-2">Starts at ${basePrices[service]}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Add-Ons */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-4">Select Add-Ons</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {Object.keys(addOnPrices).map((addOn) => (
              <button
                key={addOn}
                onClick={() =>
                  setAddOns((prev) =>
                    prev.includes(addOn) ? prev.filter((a) => a !== addOn) : [...prev, addOn]
                  )
                }
                className={`p-4 rounded-lg border-2 ${
                  addOns.includes(addOn) ? "bg-green-600 border-green-400" : "bg-gray-700 border-gray-600"
                } hover:border-green-400 transition duration-300`}
              >
                <h3 className="text-xl font-semibold">
                  {addOn.charAt(0).toUpperCase() + addOn.slice(1)}
                </h3>
                <p className="text-gray-300 mt-2">${addOnPrices[addOn]}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Total Price */}
        <div className="text-center mt-8">
          <h3 className="text-3xl font-bold">Estimated Price: ${calculateTotal()}</h3>
          <button 
          onClick={handleContinue} // Attach navigation function here
          className="mt-6 bg-blue-500 hover:bg-blue-600 px-8 py-3 rounded-lg text-white font-semibold text-lg">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}

export default GetQuote;
