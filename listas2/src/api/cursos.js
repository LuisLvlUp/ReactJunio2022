export const getCursos = async () => {
    const dataCursos = await fetch('http://localhost:3001/cursos')
    .then(data => data.json())
    .catch(error => console.error('Error:', error))

    return dataCursos;
}