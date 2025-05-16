import React from 'react'
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <div className="bg-dark p-3 text-center text-white mt-3 pb-0">
        <span>© 2025 <Link to="#" className='text-danger'>𝒮𝒽ℴ𝓅𝓅𝓎𝒢𝓁ℴ𝒷ℯ</Link>. 
        {" "} All Rights Reserved.</span>
    </div>
  )
}

export default Footer