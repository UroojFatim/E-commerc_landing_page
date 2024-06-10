import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (

        <div>
            <div className="flex mx-auto py-4 px-28 justify-evenly border-b border-gray-200 " >
                <div className='flex justify-start w-1/2 space-x-9  text-gray-500'>
                    <div className='space-x-2'>
                        <span><i class="fa-regular fa-envelope"></i></span>
                        <span>support@example.com</span>
                    </div>
                    <div className='space-x-2'>
                        <span><i class="fa-solid fa-globe"></i></span>
                        <span>Kleine Pierbard 8-6 2249 KV Vries</span>
                    </div>

                </div>
                <div className='w-1/2 flex justify-end space-x-4 text-gray-500 '>
                    <span><i class="fa-brands fa-facebook-f"></i></span>
                    <span><i class="fa-brands fa-twitter"></i></span>
                    <span><i class="fa-brands fa-vimeo-v"></i></span>
                    <span><i class="fa-brands fa-google-plus-g"></i></span>
                    <div className='flex items-center space-x-2'>
                        <img src="https://azim.commonsupport.com/Castro/assets/images/icons/icon-lang.png" alt="Logo" className="w-4 h-4" />

                        <span>English</span>
                        <span>USD</span>
                    </div>
                </div>
            </div>
            <div className="w-full h-16 flex items-center justify-between px-28 py-14">
                {/* Left div with logo */}
                <div className="flex items-center">
                    <img src="https://azim.commonsupport.com/Castro/assets/images/logo.png" alt="Logo" className="w-32" />
                </div>

                {/* Middle div with navigation links */}
                <div className="flex items-center space-x-12 text-black text-lg">
                    <Link to="/" className=" hover:text-[#596235]">Home</Link>
                    <Link to="/pages" className="hover:text-[#596235]">Pages</Link>
                    <Link to="/shop" className="hover:text-[#596235]">Shop</Link>
                    <Link to="/elements" className="hover:text-[#596235]">Elements</Link>
                    <Link to="/blog" className="hover:text-[#596235]">Blog</Link>
                    <Link to="/contact" className="hover:text-[#596235]">Contact</Link>
                </div>

                {/* Right div with SVG icons */}
                <div className="flex items-center space-x-7 text-2xl">
                    <span>
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </span>
                    <span>
                        <i class="fa-regular fa-heart"></i>
                    </span>
                    <span>
                        <i class="fa-regular fa-user"></i>
                    </span>
                    <span>
                        <i class="fa-solid fa-cart-shopping"></i>
                    </span>

                </div>
            </div>
        </div>
    );
}

export default Header;
