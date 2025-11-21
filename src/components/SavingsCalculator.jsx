import React, { useState, useEffect } from 'react';
import { FaShoppingCart, FaDollarSign } from 'react-icons/fa';

const SavingsCalculator = () => {
  const [buyPrice, setBuyPrice] = useState(10000);
  const [sellPrice, setSellPrice] = useState(400000);
  const [savings, setSavings] = useState(734105);
  const [animatedSavings, setAnimatedSavings] = useState(savings);

  // Animate the savings number
  useEffect(() => {
    let start = 0;
    const end = savings;
    const duration = 600;
    const stepTime = Math.abs(Math.floor(duration / end)) || 1;

    const timer = setInterval(() => {
      start += Math.ceil(end / (duration / stepTime));
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setAnimatedSavings(start);
    }, stepTime);

    return () => clearInterval(timer);
  }, [savings]);

  const calculateSavings = () => {
    const diff = sellPrice - buyPrice;
    let rate = 0;
    if (diff > 90000) rate = 0.08;
    else if (diff > 75000) rate = 0.05;
    else if (diff > 50000) rate = 0.03;
    setSavings(Math.round(diff * (1 + rate)));
  };

  const formatCurrency = (amount) =>
    new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0 }).format(amount);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">Save Your Money</h1>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
            Quickly calculate potential savings when buying or selling a property.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column: Savings Tiers + Buttons */}
          <div className="lg:col-span-1 space-y-4">
            {/* Savings Tiers */}
            <div className="bg-white rounded-2xl shadow-md p-5 border border-gray-200">
              <h2 className="text-lg font-semibold text-gray-800 mb-4 text-center lg:text-left">Savings Tiers</h2>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-xl border border-green-200">
                  <div className="flex flex-col">
                    <span className="font-bold text-green-700 text-sm sm:text-base">3%</span>
                    <span className="text-green-600 text-xs sm:text-sm">Save</span>
                  </div>
                  <span className="text-gray-800 font-medium text-xs sm:text-sm">Above $50K</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-blue-50 rounded-xl border border-blue-200">
                  <div className="flex flex-col">
                    <span className="font-bold text-blue-700 text-sm sm:text-base">5%</span>
                    <span className="text-blue-600 text-xs sm:text-sm">Save</span>
                  </div>
                  <span className="text-gray-800 font-medium text-xs sm:text-sm">Above $75K</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-purple-50 rounded-xl border border-purple-200">
                  <div className="flex flex-col">
                    <span className="font-bold text-purple-700 text-sm sm:text-base">8%</span>
                    <span className="text-purple-600 text-xs sm:text-sm">Save</span>
                  </div>
                  <span className="text-gray-800 font-medium text-xs sm:text-sm">Above $90K</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-3">
              <button className="flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm sm:text-base font-semibold py-2 rounded-2xl transition duration-200 transform hover:scale-105">
                <FaShoppingCart /> Buy
              </button>
              <button className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm sm:text-base font-semibold py-2 rounded-2xl transition duration-200 transform hover:scale-105">
                <FaDollarSign /> Sell
              </button>
            </div>
          </div>

          {/* Right Column: Calculator */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-200">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-5 text-center">Savings Calculator</h2>

              {/* Inputs */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                {[
                  { label: 'Buy', value: buyPrice, setter: setBuyPrice },
                  { label: 'Sell', value: sellPrice, setter: setSellPrice }
                ].map((item) => (
                  <div key={item.label}>
                    <label className="block mb-2 font-medium text-gray-700">{item.label}</label>
                    <div className="relative">
                      <span className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm">$</span>
                      <input
                        type="number"
                        value={item.value}
                        onChange={(e) => item.setter(Number(e.target.value))}
                        className="w-full pl-6 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 text-sm sm:text-base"
                      />
                    </div>
                    <div className="flex justify-between text-xs sm:text-sm text-gray-500 mt-1">
                      <span>$10K</span>
                      <span>$400K</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Calculate Button */}
              <button
                onClick={calculateSavings}
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold py-3 rounded-2xl text-sm sm:text-base transition duration-200 transform hover:scale-105 mb-5"
              >
                Calculate
              </button>

              {/* Savings Display */}
              <div className="text-center">
                <div className="inline-block bg-gradient-to-r from-green-400 to-emerald-500 text-white py-3 px-8 rounded-2xl shadow-lg text-sm sm:text-base md:text-lg">
                  <div className="opacity-90 font-medium">SAVINGS</div>
                  <div className="text-lg sm:text-2xl md:text-3xl font-bold">{formatCurrency(animatedSavings)}</div>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="text-center text-sm sm:text-base">
              <p className="text-gray-700 font-semibold mb-1">Questions?</p>
              <p className="text-indigo-600 font-bold">Call: +909 887 0980</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SavingsCalculator;
