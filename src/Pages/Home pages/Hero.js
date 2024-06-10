import React from 'react'
import Header from '../../Componenets/Header'
import Dp from '../../Assets/Dp.webp'
import { Trybutton } from '../../utilities/button/Trybutton';

import { useNavigate } from 'react-router-dom'

export default function Hero() {

  const navigate = useNavigate()
  const navigateToRegistrationPage = (e) => {
    e.preventDefault()
    console.log("registerPage")
    navigate('/Home')
  }
  return (
    // <div className='bg-gray-500'>
    //   <h1>This is Hero Page</h1>
    //   <img className="w-20" src={Dp}/>
    //   <Trybutton label={"Register"}  icon={"fa-solid fa-address-card"}  onClick={navigateToRegistrationPage}/>
    // </div>
    <div className="relative flex justify-center bg-customGray h-screen items-center">
  <div className="absolute inset-0 flex justify-center items-center pt-60">
    <img
      src="https://azim.commonsupport.com/Castro/assets/images/shape/shape-1.png"
      alt="background"
      className="opacity-50"
    />
  </div>
      <div className="relative z-10 flex justify-evenly items-center w-full px-10">
        <div className="space-y-6">
          <h1 className="text-6xl font-bold text-black leading-tight">
            Up To
            <br />
            <span className='text-red-500'>50%</span>
            Discount
          </h1>
          <h3 className="text-2xl font-medium">Summer lookbook - 2024</h3>
          <p className="text-lg">New Modern Stylish Fashionable Men's Wear Jeans Shirt</p>
          <div className="mt-4 space-x-2">
            <button className="px-4 py-2 bg-blue-500 text-white rounded">Button 1</button>
          </div>
        </div>
        <div className="w-1/2 flex justify-center">
      <img
        src="https://azim.commonsupport.com/Castro/assets/images/banner/banner-image-1.png"
        alt="overlay image"
        className="max-h-screen object-contain"
      />
    </div>
      </div>
    </div>

  )
}
