import React from 'react'
import { Alumno } from './Alumno/Alumno'

export const Curso = ({curso}) => {
  return (
      <li>
         {curso.nombre} 
         <ul>
          {
            curso.alumnos.map((alumno)=>{
              return(
                <Alumno key={`${alumno.id}`} alumno={alumno}  />
              )
            })
          }
         </ul>
      </li>
  )
}
