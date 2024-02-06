import React from 'react'
import '../Home/Home.css'
// import im from '../img/Capture.png'
export default function Home() {
    return (
        <div>
            
            <div className='color1abc9c text-white'>
                <div className='container text-center '>
                    <div className='p-5'>
                    {/* <img className=' rounded-3' src={im} alt='' /> */}
                        <h1 className='position-relative fw-bold '>START FRAMEWORK</h1>
                        <div className='d-flex align-items-center justify-content-center mb-3'>
                            <div className='line me-3'></div>
                            <i className="fa-solid fa-star"></i>
                            <div className='line ms-3'></div>
                        </div>
                        <p>Graphic Artist - Web Designer - Illustrator</p>
                    </div>
                </div>
            </div>
           
        </div>
    )
}
