import React from 'react'

export default function Footer() {
  return (
    <footer className='foot-Bg'>
      <div className='container text-center'>
        <h4 className='mb-5'>Narendran Perumal - Android Developer</h4>
 
        <div className='Sicons d-flex justify-content-center align-items-center mb-5'>
          {/* Phone */}
          <div>
            <a href="tel:8072811021">
              <i className="fa fa-phone-square mx-3" aria-hidden="true"></i>
            </a>
          </div>
 
          {/* GitHub */}
          <div>
<a target='_blank' href="https://github.com/Naren0325" rel="noopener noreferrer">
              <i className="fa fa-github mx-3" aria-hidden="false"></i>
            </a>
          </div>
 
          {/* Email */}
          <div>
            <a href="mailto:pnanendran206@gmail.com">
              <i className="fa fa-envelope mx-3"></i>
            </a>
          </div>
        </div>
 
        <p className='fw-normal'>© 2025 Narendran. All rights reserved.</p>
      </div>
    </footer>
  );
}
