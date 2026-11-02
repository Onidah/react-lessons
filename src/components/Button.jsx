import React from 'react'

function Button({button,buttonType}) {
  return (
    <>
        <button type={buttonType}>{button}</button>
    </>
  )
}

export default Button