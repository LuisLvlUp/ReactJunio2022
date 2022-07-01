import React, { useEffect, useRef, useState } from 'react'
import { Cartel } from '../Cartel/Cartel'
import { Contador } from '../Contador/Contador'
import './Main.css'

export const Main = () => {

  const [state, setState] = useState(0)
  const [color, setColor] = useState("red")

  const decrementar = () => {
      setState(state - 1)
  }

  const incrementar = () => {
      setState(state + 1)
  }

  // const mounted = useRef(false)

  useEffect(() => {
    // if(mounted.current === false){
    //   console.log("Main component")
    // }
    // mounted.current = true;

    if(state % 2 === 0){
      setColor("red")
    }else{
      setColor("blue")
    }

  }, [state])
  

  return (
    <div className='container'>
      <Cartel state={state} color={color}/>
      <Contador state={state} incrementar={incrementar} decrementar={decrementar}/>
    </div>
  )
}
