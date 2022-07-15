import React from 'react'

export const Formulario = () => {


    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <select>
                <option>
                    React
                </option>
                <option>
                    Laravel
                </option>
                <option>
                    Angular
                </option>
            </select>
            <hr></hr>
            <label>
                Nombre:
                <input type="text" />
            </label>
            <hr></hr>
            <label htmlFor='edad'> Edad: </label>
            <input type='number' id='edad'/>
            <hr></hr>
            <button type="submit" onSubmit={handleSubmit}>
                Nuevo alumno
            </button>
        </form>
    )
}
