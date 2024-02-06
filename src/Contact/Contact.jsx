import React from 'react'

export default function Contact() {
  return (
    <div>
      <div className=' text-white '>
        <div className='container'>

          <div className='pt-3 text-center '>
            <h1 className='fw-bold color2c3e50'>CONATCT SECTION</h1>
            <div className='d-flex align-items-center justify-content-center mb-3'>
              <div className='line me-3 navFotterBg'></div>
              <i className="fa-solid fa-star color2c3e50"></i>
              <div className='line ms-3 navFotterBg'></div>
            </div>
          </div>

          <form className="w-50 p-3 mx-auto ng-valid ng-dirty ">
            <input id="userName" type="text" placeholder="userName" name="userName" className="form-control border-0 border-bottom py-3 my-3 " />
            <input id="userAge" type="text" placeholder="userAge" name="userName" className="form-control border-0 border-bottom py-3 my-3 " />
            <input id="userEmail" type="text" placeholder="userEmail" name="userName" className="form-control border-0 border-bottom py-3 my-3" />
            <input id="userPassword" type="text" placeholder="userPassword" name="userName" className="form-control border-0 border-bottom py-3 my-3" />
            <button className="btn mt-4 text-white" > send Message </button>
          </form>
        </div>
      </div>


    </div>
  )
}
