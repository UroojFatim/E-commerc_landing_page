import React from 'react';

export default function Castro_News() {
  return (
    <div>
      <div className="text-center mb-10">
        <h2 className="text-4xl font-semibold">Castro News</h2>
        <p className="mt-4 text-lg">Excepteur sint occaecat cupidatat non proident sunt</p>
        <img
          src="https://azim.commonsupport.com/Castro/assets/images/icons/separator-1.png"
          alt="separator"
          className="mt-6 mx-auto"
        />
      </div>
      <div className="grid grid-cols-3 gap-8 px-28">
        {/* First Card */}
        <div className="bg-white overflow-hidden border hover:shadow-md hover:bg-red-500 hover:bg-opacity-50 transition duration-300 ease-in-out">
          <img src="https://azim.commonsupport.com/Castro/assets/images/news/news-2.jpg" alt="Image 1" className="w-full object-cover hover:opacity-75" />
          <div className="p-7 space-y-3">
            <p className="text-gray-900">May 05, 2020</p>
            <h3 className="text-xl font-semibold">Why is a ticket to Lagos so expensive?</h3>
            <p className="text-gray-500">by admin</p>
            <p className="text-gray-500 mt-2">Tempor incididunt labore dolore magna aliqua. enim minim veniam quis nostrud exercitation laboris.</p>
            <a href="#" className="mt-4 block text-black">Read More <i className="fas fa-arrow-right"></i></a>
          </div>
        </div>

        {/* Second Card */}
        <div className="bg-white overflow-hidden border hover:shadow-md hover:bg-red-500 hover:bg-opacity-50 transition duration-300 ease-in-out">
          <img src="https://azim.commonsupport.com/Castro/assets/images/news/news-1.jpg" alt="Image 2" className="w-full object-cover hover:opacity-75" />
          <div className="p-7 space-y-3">
            <p className="text-gray-900">May 04, 2020</p>
            <h3 className="text-xl font-semibold">But I must explain to you how all this mistaken idea.</h3>
            <p className="text-gray-500">by admin</p>
            <p className="text-gray-500 mt-2">Tempor incididunt labore dolore magna aliqua. enim minim veniam quis nostrud exercitation laboris.</p>
            <a href="#" className="mt-4 block text-black">Read More <i className="fas fa-arrow-right"></i></a>
          </div>
        </div>

        {/* Third Card */}
        <div className="bg-white overflow-hidden border hover:shadow-md hover:bg-red-500 hover:bg-opacity-50 transition duration-300 ease-in-out">
          <img src="https://azim.commonsupport.com/Castro/assets/images/news/news-3.jpg" alt="Image 3" className="w-full object-cover hover:opacity-75" />
          <div className="p-7 space-y-3">
            <p className="text-gray-900">May 03, 2020</p>
            <h3 className="text-xl font-semibold">The Biebers Just Switched Up Their Couple Style</h3>
            <p className="text-gray-500">by admin</p>
            <p className="text-gray-500 mt-2">Tempor incididunt labore dolore magna aliqua. enim minim veniam quis nostrud exercitation laboris.</p>
            <a href="#" className="mt-4 block text-black">Read More <i className="fas fa-arrow-right"></i></a>
          </div>
        </div>
      </div>
    </div>
  );
}
