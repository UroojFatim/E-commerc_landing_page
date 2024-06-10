import React from 'react';

export default function Our_top_collection() {
    // Define the product array
    const products = [
        {
            id: 1,
            name: 'Women Collections',
            price: 49.99,
            image: 'https://azim.commonsupport.com/Castro/assets/images/resource/shop/shop-1.jpg'
        },
        {
            id: 2,
            name: 'Kids Collections',
            price: 29.99,
            image: 'https://azim.commonsupport.com/Castro/assets/images/resource/shop/shop-2.jpg'
        },
        {
            id: 3,
            name: 'Summer Collections',
            price: 39.99,
            image: 'https://azim.commonsupport.com/Castro/assets/images/resource/shop/shop-3.jpg'
        },
        {
            id: 4,
            name: 'Summer Collections',
            price: 39.99,
            image: 'https://azim.commonsupport.com/Castro/assets/images/resource/shop/shop-4.jpg'
        },
        {
            id: 5,
            name: 'Summer Collections',
            price: 39.99,
            image: 'https://azim.commonsupport.com/Castro/assets/images/resource/shop/shop-5.jpg'
        },
        {
            id: 6,
            name: 'Gents Collections',
            price: 59.99,
            image: 'https://azim.commonsupport.com/Castro/assets/images/resource/shop/shop-6.jpg'
        },
        {
            id: 7,
            name: 'Gents Collections',
            price: 59.99,
            image: 'https://azim.commonsupport.com/Castro/assets/images/resource/shop/shop-7.jpg'
        },
        {
            id: 8,
            name: 'Gents Collections',
            price: 59.99,
            image: 'https://azim.commonsupport.com/Castro/assets/images/resource/shop/shop-8.jpg'
        }
    ];

    return (
        <div className="p-10 pt-36 px-20 lg:px-20">
            <div className="text-center mb-10">
                <h2 className="text-4xl font-semibold">Our Top Collection</h2>
                <p className="mt-4 text-lg">There are some products that we featured for you to choose your best</p>
                <img
                    src="https://azim.commonsupport.com/Castro/assets/images/icons/separator-1.png"
                    alt="separator"
                    className="mt-6 mx-auto"
                />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {products.map(product => (
                    <div key={product.id} className="relative mx-auto mb-4 overflow-hidden group"           >
                        <div className="relative mx-auto mb-4 overflow-hidden group">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 flex items-center justify-center bg-red-500 bg-opacity-0 opacity-0 transition-opacity duration-300 group-hover:bg-opacity-50">
                                <button className="px-4 py-2 bg-white text-red-500 font-semibold rounded hover:bg-red-500 hover:text-white transition-colors duration-300 opacity-0 group-hover:opacity-100">Add to Cart</button>
                            </div>
                            <div className="absolute bottom-2 left-2 bg-gray-700 text-white font-semibold rounded px-2 py-1 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                Add to Cart
                            </div>
                        </div>
                        <h3 className="text-xl font-semibold">{product.name}</h3>
                        <p className="text-lg mt-2">${product.price.toFixed(2)}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
