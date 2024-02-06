import React from 'react'
import im from '../img/poert1.png'
import im2 from '../img/port2.png'
import im3 from '../img/port3.png'
export default function Portofolio() {
  return (<>
    <div className=' text-white '>
      <div className='container  '>
        <div className='p-5 text-center'>
          <h1 className='fw-bold color2c3e50'>PORTFOLIO COMPONENT</h1>

          <div className='d-flex align-items-center justify-content-center mb-3'>
            <div className='line me-3 navFotterBg'></div>
            <i className="fa-solid fa-star color2c3e50"></i>
            <div className='line ms-3 navFotterBg'></div>
          </div>
          <div className='row g-4 '>
            <div className='col-md-4'>
              <img className='w-100 rounded-3' src={im} alt='' />
            </div>
            <div className='col-md-4'>
              <img className='w-100 rounded-3' src={im2} alt='' />
            </div>
            <div className='col-md-4'>
              <img className='w-100 rounded-3' src={im3} alt='' />
            </div>
            <div className='col-md-4'>
              <img className='w-100 rounded-3' src={im} alt='' />
            </div>
            <div className='col-md-4'>
              <img className='w-100 rounded-3' src={im2} alt='' />
            </div>
            <div className='col-md-4'>
              <img className='w-100 rounded-3' src={im3} alt='' />
            </div>

          </div>
        </div>


      </div>
    </div>
  </>
  )
}
