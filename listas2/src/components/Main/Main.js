import React, { useEffect, useState } from 'react'
import { ListaCurso } from '../ListaCurso/ListaCurso'
import './Main.css'
import { cursos as cursosData } from '../../shared/cursos'

export const Main = () => {

    const [cursos, setCursos] = useState([])

    useEffect(() => {
        setCursos(cursosData)
    }, [])
    

    return (
        <div className='container'>
            <ListaCurso lista={cursos} />
        </div>
    )
}
