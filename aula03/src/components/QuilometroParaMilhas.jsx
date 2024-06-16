import React from 'react'

const QuilometroParaMilhas = (props) => {
    const result = props.km / props.milhas
  return (
    <div className='conversao'>
        <h1>O valor de {props.km}km h em milhas é {result.toFixed(3)} </h1>
    </div>
  )
}

export default QuilometroParaMilhas