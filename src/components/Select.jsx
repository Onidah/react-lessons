import React from 'react'

function Select({value,name}) {
  return (
    <>
    <select name={name}>
        <option value={value}>{value}</option>
    </select>
    </>
  )
}

export default Select