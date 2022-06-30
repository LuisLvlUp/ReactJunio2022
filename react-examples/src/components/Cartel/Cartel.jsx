import React, { useState } from 'react'
import './Cartel.css'

export const Cartel = ( { state } ) => {

  return (
    <div className='cartel'> Hacen falta { 100 - state } para llegar a 100</div>
  )
}
