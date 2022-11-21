import React from 'react'

function DateSelection({start, setStart}) {
  
  function change(){
        start++;
        setStart(start);
  }

  return (
    <div>
        <button onClick={change}> CLICK HERE FOR USE STATE TESTING</button>
    </div>
  )
}

export default DateSelection