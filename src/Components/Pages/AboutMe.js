import React from 'react'
// import Resume from '../../../public/assets/JAGAN_BM.pdf'

// export default function AboutMe() { 

//   const handleDownload = () => {
//     const link = document.createElement('a');
//     link.href = `https://bmjagan.vercel.app/assets/JAGAN_BM.pdf`; // Path to your PDF
//     link.download = 'JAGAN_B.pdf'; // Filename for the downloaded file
//     link.click();
//   }

//   return (
//     <section className='aboutbg swift-up-text'>
//       <div className='container'>
//         <div className='text-start'>
//           <h3 className='fw-bold mb-3'>ABOUT ME</h3>
//           <div className='abo mt-5 row'>
//             <div className='col-md-6 d-flex justify-content-center mb-4'>
//               <img src='/assets/images/v.jpg' className='abo_img ' alt='me' />
//             </div>
//             <div className='col-md-6 mb-4'>
//               <div className='text-end mb-3'>
//                 <h5>HI</h5>
//                 <h4>THERE!</h4>
//               </div>
//               <div className='box_bg mb-3'>
//                 <p className='mb-0'>My name is Narendran and I'm a Android Developer.
//                   Although I started Career in Lynexsoft LLP, in the last 2 years I have focused on web and Mobile app development.</p>
//               </div>
//               <div className='box_bg mb-3'>
//                 <p className='mb-0'>In this portfolio you will find my most outstanding works since I started on this path.
//                   I invite you to know me better, my training, and experience and see my <a href='#' onClick={()=> handleDownload()} className='text-success'>RESUME</a> located in the upper right part of this page.
//                   .</p>
//               </div>
//               <div className='text-end mb-3'>
//                 <h6>My favorite technologies  include:</h6>
//                 <p>REACT JS, NODE JS, HTML & CSS </p>
//               </div>
//             </div>
//             <div className='col-md-12 mb-4 d-none'>
//               <h3 className='fw-bold mb-3'>MY SKILLS</h3>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }


export default function AboutMe() {
  const handleDownload = () => {
    const link = document.createElement('a');
link.href = `https://bmjagan.vercel.app/assets/JAGAN_BM.pdf`; // Path to your PDF
link.download = 'Narendran_P_Resume.pdf'; // Filename for the downloaded file
link.click();
  }
 
  return (
    <section className='aboutbg swift-up-text'>
      <div className='container'>
        <div className='text-start'>
          <h3 className='fw-bold mb-3'>ABOUT ME</h3>
          <div className='abo mt-5 row'>
 
            <div className='col-md-6 d-flex justify-content-center mb-4'>
              <img src='/assets/images/v.jpg' className='abo_img ' alt='me' />
            </div>
 
            <div className='col-md-6 mb-4'>
              <div className='text-end mb-3'>
                <h5>HI</h5>
                <h4>THERE!</h4>
              </div>
 
              <div className='box_bg mb-3'>
                <p className='mb-0'>
                  Hi there! 👋 <br /><br />
                  My name is <strong>Narendran P</strong> and I’m an Android Developer specializing in <strong>Kotlin Multiplatform (KMP)</strong>. I began my career at <strong>Lynexsoft LLP</strong>, and over the last two years, I’ve focused on building cross-platform applications for mobile and desktop using modern Kotlin technologies.
                </p>
              </div>
 
              <div className='box_bg mb-3'>
                <p className='mb-0'>
                  In this portfolio, you’ll discover some of my key projects:
                  <br /><br />
                  🧾 <strong>Mitra Bar Billing</strong> – A high-performance desktop billing system with POS features.
                  <br />
                  🏨 <strong>Hotel Booking App (B2B & B2C)</strong> – A cross-platform hotel app with real-time availability, secure payments, and multi-language support.
                  <br /><br />
                  These projects reflect my journey, skills, and commitment to clean, scalable development. Feel free to explore and get to know more about my work, background, and download my <a href='#' onClick={handleDownload} className='text-success'>RESUME</a> from the top-right corner of this page.
                </p>
              </div>
 
              <div className='text-end mb-3'>
                <h6>My favorite technologies include:</h6>
                <p><strong>Kotlin</strong>, <strong>Kotlin Multiplatform (KMP)</strong>, <strong>Jetpack Compose</strong>, <strong>SQLDelight</strong>, <strong>Ktor</strong></p>
              </div>
            </div>
 
            <div className='col-md-12 mb-4 d-none'>
              <h3 className='fw-bold mb-3'>MY SKILLS</h3>
            </div>
 
          </div>
        </div>
      </div>
    </section>
  );
}