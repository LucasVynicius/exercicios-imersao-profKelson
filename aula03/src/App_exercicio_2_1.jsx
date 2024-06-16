import React from 'react'
import './App.css'
import CelsiusParaFahrenheit from './components/CelsiusParaFahrenheit'
import FahrenheitParaCelsius from './components/FahrenheitParaCelsius'
import QuilometroParaMilhas from './components/QuilometroParaMilhas'
import MilhasParaQuilometros from './components/MilhasParaQuilometros'

const App = () => {
  return (
    <div className='container'>
      <CelsiusParaFahrenheit celsius = {4}/>
      <FahrenheitParaCelsius f = {5} celsius = {4}/>
      <QuilometroParaMilhas km = {1} milhas = {1.609}/>
      <MilhasParaQuilometros milhas = {1.609} km = {1} />
    </div>
  )
}

export default App