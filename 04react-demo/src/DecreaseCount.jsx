import React from 'react'

function DecreaseCount({decreaseCount}) {
  return (
    <div><button onClick={decreaseCount} id="b2">Decrease Count</button></div>
  )
}

export default DecreaseCount