import React from 'react'

const MilhasParaQuilometros = (props) => {
    const result = props.km / props.milhas;
  return (
    <div className='conversao'>
        <h1>O valor de {props.milhas} milhas é o mesmo que {result.toFixed(3)}km h </h1>
    </div>
  )
}

export default MilhasParaQuilometros