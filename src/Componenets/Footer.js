import React from 'react';

export default function Footer() {
    return (
        <footer className="text-black py-12">
            <div className="container mx-auto flex flex-wrap justify-evenly">
                <div className="w-full sm:w-1/2 md:w-1/6 mb-8">
                    <div className="flex items-center">
                        <img src="https://azim.commonsupport.com/Castro/assets/images/logo.png" alt="Logo" className="w-32" />
                    </div>
                </div>
                <div className="w-full sm:w-1/2 md:w-1/6 mb-8">
                    <h3 className="text-2xl font-semibold mb-5">Category</h3>
                    <ul className='space-y-3 text-gray-500'> 
                        <li>Men</li>
                        <li>Women</li>
                        <li>Kids</li>
                        <li>Accessories</li>
                        <li>Shoe</li>
                    </ul>
                </div>
                <div className="w-full sm:w-1/2 md:w-1/6 mb-8">
                    <h3 className="text-2xl font-semibold mb-5">Useful Links</h3>
                    <ul className='space-y-3 text-gray-500'>
                        <li>News & Tips</li>
                        <li>About Us</li>
                        <li>Terms & Conditions</li>
                        <li>Our Shop</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <div className="w-full sm:w-1/2 md:w-1/6 mb-8">
                    <h3 className="text-2xl font-semibold mb-5">Contact</h3>
                    <ul className='space-y-3 text-gray-500 pr-10'>
                        <li>4708 Ruecker Wall, Kassandratown, HI</li>
                        <li>+2(305) 587-3407</li>
                        <li>info@example.com</li>
                    </ul>
                </div>
                <div className="w-full sm:w-1/2 md:w-1/5 mb-8">
                    <div className="flex flex-col">
                        <h3 className="text-2xl font-semibold mb-5">Newsletter</h3>
                        <p className='text-gray-500 '>4708 Ruecker Wall, Kassandratown, HI 97729</p>
                        <form className="mt-4">
                            <input type="email" placeholder="Enter your email" className="px-4 py-2 border border-black text-gray-300 " />
                            <button type="submit" className="px-9 py-3 bg-black text-white font-bold mt-2">Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>
        </footer>
    );
}
