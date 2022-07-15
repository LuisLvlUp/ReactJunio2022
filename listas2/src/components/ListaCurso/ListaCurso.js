import React from 'react'
import { cursos } from '../../shared/cursos'
import { Curso } from './Curso/Curso'

export const ListaCurso = ({lista}) => {
  return (
    <ul>
      {
        lista.map((curso) => {
          return <Curso key={curso.id} curso={curso}  />
        })
      }
    </ul>
  )
}
