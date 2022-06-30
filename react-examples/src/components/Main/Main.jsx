import React, { useState } from 'react'
import { Cartel } from '../Cartel/Cartel'
import { Contador } from '../Contador/Contador'
import './Main.css'

export const Main = () => {

  const [state, setState] = useState(0)

  const decrementar = () => {
      setState(state - 1)
  }

  const incrementar = () => {
      setState(state + 1)
  }

  return (
    <div className='container'>
      <Cartel state={state}/>
      <Contador state={state} incrementar={incrementar} decrementar={decrementar}/>
    </div>
  )
}
