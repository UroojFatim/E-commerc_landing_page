import React from 'react';

export default function Top_categories() {
  return (
    <div className="p-10 pt-36 px-20 lg:px-20">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-semibold">Top Category</h2>
        <p className="mt-4 text-lg">Follow the most popular trends and get exclusive items from Castro shop</p>
        <img
          src="https://azim.commonsupport.com/Castro/assets/images/icons/separator-1.png"
          alt="separator"
          className="mt-6 mx-auto"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14">
        <div className="text-center">
          <div className="relative mx-auto mb-4 rounded-full overflow-hidden group">
            <img
              src="https://azim.commonsupport.com/Castro/assets/images/resource/category-1.png"
              alt="category1"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-red-600 opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
          </div>
          <h3 className="text-xl font-semibold">Women Collections</h3>
        </div>
        <div className="text-center">
          <div className="relative mx-auto mb-4 rounded-full overflow-hidden group">
            <img
              src="https://azim.commonsupport.com/Castro/assets/images/resource/category-2.png"
              alt="category2"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-red-600 opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
          </div>
          <h3 className="text-xl font-semibold">Kids Collections</h3>
        </div>
        <div className="text-center">
          <div className="relative mx-auto mb-4 rounded-full overflow-hidden group">
            <img
              src="https://azim.commonsupport.com/Castro/assets/images/resource/category-3.png"
              alt="category3"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-red-600 opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
          </div>
          <h3 className="text-xl font-semibold">Summer Collections</h3>
        </div>
        <div className="text-center">
          <div className="relative mx-auto mb-4 rounded-full overflow-hidden group">
            <img
              src="https://azim.commonsupport.com/Castro/assets/images/resource/category-4.png"
              alt="category4"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-red-600 opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
          </div>
          <h3 className="text-xl font-semibold">Gents Collections</h3>
        </div>
      </div>
    </div>
  );
}
