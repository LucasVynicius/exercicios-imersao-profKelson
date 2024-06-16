import React from 'react'

const Divicao2 = (props) => {
  const result = props.num1 / props.num2;
  return (
    <div>
        <h1>O resultado de {props.num1} / {props.num2} é igual á {result}</h1>
    </div>
  )
}

export default Divicao2