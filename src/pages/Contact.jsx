import React from 'react'
import {Link} from 'react-router-dom'
function Contact() {
  return (
    <div>
        <h1>Contact</h1>
        <button>
            <Link to='/about'>Go to about</Link>
        </button>
    </div>
  )
}

export default Contact