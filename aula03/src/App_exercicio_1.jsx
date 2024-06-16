import React from 'react'
import './App.css'
import Adicao2 from './components/Adicao2'
import Subratacao2 from './components/Subratacao2'
import MultiplicacaoTest from './components/MultiplicacaoTest'
import Divicao2 from './components/Divicao2'

const App_exercicio_1 = () => {
  return (
    <div>
      <Adicao2 num1={5} num2= {10}/>
      <Subratacao2 num1={2} num2= {2} />
      <MultiplicacaoTest num1={5} num2= {10} />
      <Divicao2 num1={5} num2= {10} />
    </div>
  )
}

export default App_exercicio_1