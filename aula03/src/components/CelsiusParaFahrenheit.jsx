import React from 'react'

const CelsiusParaFahrenheit = (props) => {
    const result = 1.8 * props.celsius + 32;
  return (
    <div className='conversao'>
        <h1>{props.celsius}ºC é o mesmo que {result} ºF</h1>
    </div>
  )
}

export default CelsiusParaFahrenheit