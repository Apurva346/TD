import { Button } from 'react-bootstrap';
import React, { useState } from 'react'

const CountFun = () => {
    const [countf, setCountf] = useState(0);

    const handleDecrement = () => {
        if (countf > 0) { 
            setCountf( countf-1 )
        }
    }
  return (
    <div>
      <h1 className='text-center'>{countf}</h1>
      <Button variant='success m-2' onClick={()=> setCountf(countf+1)}>Increment</Button>
      <Button variant='primary m-2' onClick={handleDecrement}>Decrement</Button>
    </div>
  )
}

export default CountFun
