import React from 'react'

export const ListaCurso = ({lista}) => {
  return (
    <ul>
      {
        lista.map((curso, index) => {
          return <li key={index}> {curso.nombre} </li>
        })
      }
    </ul>
  )
}
