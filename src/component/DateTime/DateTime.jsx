import React from 'react'

function DateTime() {

    const d = new Date();
    const time = d.toLocaleDateString();





  return (
    <div>{time}</div>
  )
}

export default DateTime