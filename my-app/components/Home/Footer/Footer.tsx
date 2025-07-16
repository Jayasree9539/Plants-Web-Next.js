import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="flex flex-col md:flex-row items-start justify-center px-6 md:px-16 lg:px-32 gap-8 py-14 border-b border-gray-500/30 text-gray-500">
        
        {/* Logo, Name, and Description */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 w-[90%] xl:w-[80%] mx-auto">
          
          {/* Name and Description */}
          <div className="text-center sm:text-left">
            <h2 className="text-sm text-green-900 font-bold">GREEN HEVEN</h2>
            <p className="mt-2 text-sm max-w-md">
              {`Bringing nature closer to you - Explore our vast collection of plants to create a refreshing 
              and vibrant space for your home and office. Let's grow a greener world together!`}
            </p>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="w-1/2 flex items-start justify-start md:justify-center">
          <div>
            <h2 className="font-medium text-gray-900 mb-3">Navigation</h2>
            <ul className="text-sm space-y-2">
              <li><a className="hover:underline transition" href="#">Home</a></li>
              <li><a className="hover:underline transition" href="#">Plants</a></li>
              <li><a className="hover:underline transition" href="#">About Us</a></li>
              <li><a className="hover:underline transition" href="#">Reviews</a></li>
              <li><a className="hover:underline transition" href="#">Privacy policy</a></li>
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="w-1/2 flex items-start justify-start md:justify-center">
          <div>
            <h2 className="font-medium text-gray-900 mb-3">Contact</h2>
            <div className="text-sm space-y-2">
              <p>+91-1234567890</p>
              <p>interio@plants.in</p>
            </div>
          </div>
        </div>

      </div>

      {/* Copyright */}
      <p className="py-4 text-center text-xs md:text-sm">
        Copyright 2025 © Pick Your Plant. All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
