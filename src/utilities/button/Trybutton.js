import React from 'react';

export const Trybutton = ({ label, onClick, icon }) => (
    <button
        className="text-white bg-[#d46e08] border-0 py-2 px-6 mb-5 focus:outline-none hover:bg-[#a05306] rounded text-lg"
        onClick={onClick}
    >
        <i className={icon}></i> {label}
    </button>
);
