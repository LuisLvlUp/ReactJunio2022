import React from 'react'

export const Alumno = ({alumno}) => {
  return (
    <li>
      alumno: {alumno.nombre}, edad: {alumno.edad}
    </li>
  )
}
