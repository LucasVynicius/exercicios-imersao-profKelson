import React from 'react'

const FahrenheitParaCelsius = (props) => {
    const result = (props.celsius - 32) * 5 / 9;
  return (
    <div className='conversao'>
        <h1>{props.f}ºF é o mesmo que {result.toFixed(2)}ºC</h1>
    </div>
  )
}

export default FahrenheitParaCelsius