import React, { useEffect } from 'react'
import './Contador.css'

export const Contador = ( { decrementar, incrementar, state } ) => {

    return (
        <div>
            <button className='btn' onClick={() => decrementar()}>
                -
            </button>
            <span className='numero'>
                { state }
            </span>
            <button className='btn' onClick={() => incrementar()}>
                +
            </button>
        </div>
    )
}
