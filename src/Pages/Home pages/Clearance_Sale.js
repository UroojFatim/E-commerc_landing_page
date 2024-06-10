import React from 'react';

export default function Clearance_Sale() {
  return (
    <div className="clearance-sale mb-56">
      <div className="image-container" style={{ position: 'relative' }}>
        <img src="https://azim.commonsupport.com/Castro/assets/images/background/cta-bg-1.jpg" alt="Clearance Sale" />
        <div className="sale-info bg-white text-center space-y-7 shadow-lg" style={{ position: 'absolute', width: '80%', bottom: '-30%', left: '50%', transform: 'translateX(-50%)', paddingLeft: '180px', paddingBottom: '70px', paddingRight: '180px' , paddingTop: '70px' ,borderRadius: '10px' }}>
          <h2 className='text-5xl font-semibold px-2'>End of Season Clearance Sale up to 50%</h2>
          <p className='text-lg font-medium'>Welcome to the new range of shaving products from master barber. We have over three decades of experience in the male grooming industry.</p>
          <button className='bg-black text-white px-10 py-4 font-bold'>Shop Now <i className="fas fa-arrow-right"></i></button>
        </div>
      </div>
    </div>
  );
}
