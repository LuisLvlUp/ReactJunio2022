import React, { useEffect, useRef } from 'react'

export const AboutUs = () => {

  const inputEl = useRef(null);
  const effectRef = useRef(false);

  useEffect(() => {
    if(!effectRef.current){
      console.log('Entra useEffect')
    }
    effectRef.current = true;
  }, [])

  const focusInput = () => {
    // `current` apunta al elemento de entrada de texto montado
    inputEl.current.focus();
    inputEl.current.style = 'background-color: lightblue'
    console.log(inputEl.current)
  };

  return (
    <>
      <input type="text" ref={inputEl} />
      <button onClick={focusInput}>Focus Input</button>
    </>
  )
}
