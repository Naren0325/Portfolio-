import React from 'react'

export default function ContactMe() {
  return (
    <section className='Con_bg' id='contact'>
      <div className='container'>
        <div className=' d-flex justify-content-center text-center w-100'>
          <div className='conatct'>
            <h3 className='mb-3'>Contact Me</h3>
            <p className='mb-3'>I'm always open to new opportunities, collaborations, or interesting projects.
Feel free to reach out — let's build something great together!</p>
            <a href={`mailto:pnarendran206@gmail.com`}>
              <button type='button' className='btn py-2'>Email Me</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
