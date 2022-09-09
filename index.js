const express = require('express')
const app = express()
const { Router } = express
const productos = require('./productos')

const PORT = process.env.PORT || 8080




app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use('/formulario',express.static(__dirname + '/assets')) 

app.use('/api', productos)







const server = app.listen(PORT, () => {
    console.log(`Desafio express con router iniciado - PORT: ${PORT}`)
})

server.on('error', err => {
    console.log(err.message)
})