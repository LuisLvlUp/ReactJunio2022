import React, { useEffect, useState } from 'react'
import { ListaCurso } from '../ListaCurso/ListaCurso'
import './Main.css'
// import { cursos as cursosData } from '../../shared/cursos'
import { Formulario } from '../Formulario/Formulario'
import { newCarro } from '../../api/carros'

export const Main = () => {

    const [cursos, setCursos] = useState([])

    useEffect(() => {
        fetch('http://localhost:3001/cursos')
            .then(data => data.json())
            .catch(error => console.error('Error:', error))
            .then(response => setCursos(response))

        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(data => data.json())
            .catch(error => console.error('Error:', error))
            .then(response => console.log(response))
    }, [])


    return (
        <div className='container'>
            <ListaCurso lista={cursos} />
            <hr></hr>
            <hr></hr>
            <hr></hr>
            <Formulario cursos={cursos} setCursos={setCursos} />
            <button onClick={newCarro}>New Carro</button>
        </div>
    )
}
