import React from 'react'
import '../css/Signup.css'

const Signup = () => {
  return (
    <div className='form-main'>
        <div className='form-head'>
          <form className='form-signup'>
            <input type="text" placeholder='Your Name' className='signup-name'/>
            <input type="email" placeholder='Your email' className='signup-email'/>
            <input type="password" placeholder='Your Password' className='signup-pass'/>
            <input type="Submit"/>
          </form>
        </div>
    </div>
  )
}

export default Signup