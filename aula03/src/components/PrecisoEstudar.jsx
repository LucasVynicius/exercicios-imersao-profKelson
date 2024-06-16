import React from 'react'

const PrecisoEstudar = (props) => {
    const tecnologia = props.tecnologia
  return (
    <div className='estudo'>
        <h1>Preciso estudar {props.tecnologia}</h1>
    </div>
  )
}

export default PrecisoEstudar