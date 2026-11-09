import React from 'react'
import {Link} from 'react-router-dom'

function Courses() {
  return (
    <div>
        <h1>Courses</h1>
        <button>
            <Link to='/contact'>Return to contact</Link>
        </button>
    </div>
  )
}

export default Courses