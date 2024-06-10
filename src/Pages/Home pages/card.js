import React from 'react';
import { FaTruck, FaCreditCard, FaHeadset, FaArrowAltCircleRight } from 'react-icons/fa';

export default function Card() {
    return (
        <div className="flex items-center justify-center space-x-5 py-5 m-20 border-y border-gray-200">
            <div className="flex items-center mb-4 mt-6">
                <FaTruck className="text-black text-7xl mr-5" />
                <div>
                    <span className="font-semibold">Free Shipping</span>
                    <p className="text-sm">Free shipping on orders over $100</p>
                </div>
            </div>

            <div className="flex items-center mt-6 mb-4">
                <FaCreditCard className="text-black text-7xl mr-5" />
                <div>
                    <span className="font-semibold">Secure Payment</span>
                    <p className="text-sm">We ensure secure payment with PEV</p>
                </div>
            </div>

            <div className="flex items-center mt-6 mb-4">
                <FaHeadset className="text-black text-7xl mr-5" />
                <div>
                    <span className="font-semibold">Support 24/7</span>
                    <p className="text-sm">Contact us 24 hours a day, 7 days a week</p>
                </div>
            </div>

            <div className="flex items-center mt-6 mb-4">
                <FaArrowAltCircleRight className="text-black text-7xl mr-5" />
                <div>
                    <span className="font-semibold">30 Days Return</span>
                    <p className="text-sm">Simply return it within 30 days for an exchange</p>
                </div>
            </div>
        </div>
    );
}
