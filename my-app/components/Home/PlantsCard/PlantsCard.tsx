"use client";
import React, { useState } from 'react';
import { plantsData } from '@/constant/constant';
import Image from "next/image";
import { FaRupeeSign } from "react-icons/fa";  

const PlantsCard = () => {
  const [showAll, setShowAll] = useState(false);
  
  const plantsToShow = showAll ? plantsData : plantsData.slice(0, 3 * 4); // Show only 3 rows initially (3*4 = 12 items)

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold text-center mb-8">Our Collections</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {plantsToShow.map((plant) => (
          <div key={plant.id} className="bg-white p-4 rounded-xl shadow-lg text-center">
            <div className="w-60 h-60 mx-auto overflow-hidden rounded-lg border-2 border-gray-200">
              <Image 
                src={plant.image} 
                alt={plant.name} 
                width={240} 
                height={240} 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-medium mt-4">{plant.name}</h3>
            <p className="text-black font-bold mt-2 flex items-center justify-center">
              <FaRupeeSign className="w-4 h-4 mr-1" />
              {plant.rate}
            </p>
            <button className="mt-4 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
              Shop Now
            </button>
          </div>
        ))}
      </div>
      {!showAll && (
        <div className="text-center mt-6">
          <button 
            className="px-12 py-2.5 border rounded text-gray-500/70 hover:bg-slate-50/90 transition"
            onClick={() => setShowAll(true)}
          >
            See More
          </button>
        </div>
      )}
    </div>
  );
};

export default PlantsCard;
