import React, { useEffect, useState } from 'react'

export const Formulario = ({cursos, setCursos}) => {

    const [alumno, setAlumno] = useState({
        curso: 1,
        nombre: '',
        edad: ''
    })

    useEffect(() => {
        if(alumno.nombre !== '' && alumno.edad !== ''){
            const nuevaData = cursos.map((curso) => {
                if(curso.id == alumno.curso){
                    return { ...curso, alumnos: [...curso.alumnos, {
                        id: curso.alumnos.length + 1,
                        nombre: alumno.nombre,
                        edad: alumno.edad
                    }] }
                }else{
                    return curso;
                }
            })

            setCursos(nuevaData)
        }
    }, [alumno])
    

    const handleSubmit = (event) => {
        event.preventDefault();

        setAlumno({
            ...alumno,
            nombre: event.target.nombre.value,
            edad: Number(event.target.edad.value)
        })

        event.target.nombre.value = '';
        event.target.edad.value = '';
    }

    const handleChange = (event) => {
        setAlumno({...alumno, curso: event.target.value})
    }

    return (
        <form onSubmit={handleSubmit}>
            <select value={alumno.curso} onChange={handleChange}>
                {
                    cursos.map( (curso) => (
                        <option value={curso.id} key={curso.id}> {curso.nombre} </option>
                    ))
                }
            </select>
            <hr></hr>
            <label>
                Nombre:
                <input type="text" id="nombre" name="nombre"/>
            </label>
            <hr></hr>
            <label htmlFor='edad'> Edad: </label>
            <input type='number' id='edad' name='edad'/>
            <hr></hr>
            <button type="submit" onSubmit={handleSubmit}>
                Nuevo alumno
            </button>
        </form>
    )
}
