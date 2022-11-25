import React from 'react'
import Timer from './Timer'
import { useState } from 'react'

const TimeContatiner = () => {

  const [display, setDisplay] = useState(true)

  return (
    <div>
      <button onClick={()=>setDisplay(!display)}>Switch Timer</button>
      { display && <Timer />}
    </div>
  )
}

export default TimeContatiner
