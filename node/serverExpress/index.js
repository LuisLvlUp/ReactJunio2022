const express = require('express')
const { animales } = require('./shared/animales')
const { carros } = require('./shared/carros')
const { cursos } = require('./shared/cursos')
const cors = require('cors')
const bp = require('body-parser')

const app = express()
const port = 3001

app.use(cors())
app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.send('Hello World!')
})


// ANIMALES

app.get('/animales', (req, res) => {
    res.json(animales)
})

// carros

app.get('/carros', (req, res) => {
    res.json(carros)
})

app.get('/cursos', (req, res) => {
    res.json(cursos)
})

app.get('/carros/:id', (req, res) => {
    let id = req.params.id
    let filtrado = carros.filter((carro) => (carro.id == id))
    res.json(filtrado)
})

app.post('/carros', (req, res) => {
    carros.push({
        id: carros.length,
        nombre: req.body.nombre,
        marca: req.body.marca
    })
    console.log(carros)
    res.json(carros)
})

app.put('/carros/:id', (req, res) => {
    let id = req.params.id
    res.json(carros)
})

app.delete('/carros/:id', (req, res) => {
    let id = req.params.id
    res.json(carros)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
