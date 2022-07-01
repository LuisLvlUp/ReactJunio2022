import React, { useEffect, useState } from 'react'
import './Cartel.css'

export const Cartel = ( { state, color } ) => {

  return (
    <div className='cartel'> Hacen falta 
    <span style={{color: color}}>
    &nbsp; { 100 - state } &nbsp;
      </span>
     para llegar a 100</div>
  )
}
