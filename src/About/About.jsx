import React from 'react'

export default function About() {

  return (<>
    <div className='color1abc9c text-white p-5'>
      <div className='container m-5 '>
        <div className='p-5 text-center'>
          <h1 className='position-relative '>ABOUT COMPONENT</h1>
          <div className='d-flex align-items-center justify-content-center mb-3'>
            <div className='line me-3'></div>
            <i className="fa-solid fa-star"></i>
            <div className='line ms-3'></div>
          </div>
        </div>
        <div className='row'>
        <div className='col-md-6'>
          <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
        </div>
        <div className='col-md-6'>
          <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
        </div>
        </div>

      </div>
    </div>
  </>
  )
}
