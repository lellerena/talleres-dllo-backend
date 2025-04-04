/**{
    "hobbies": ["lectura", "trabajar", "malabares"],
    "codigo": "200094287",
    "apellido": "ROMERO MARTINEZ",
    "nombre": "SANTIAGO"
  }, */

const users = require('./24-taller-04-datos.json')

const express = require('express')
const app = express()
const port = 3000
app.use(express.json())

app.get('/users/exists', (req, res) => {
    const codigo = req?.query?.codigo || req?.body?.codigo
    if (!codigo) {
        return res.status(400).json({ error: 'Missing codigo parameter' })
    }
    const userExists = users.some((user) => user.codigo === codigo)
    res.json({ exists: userExists })
})

app.get('/users/is-free', (req, res) => {
    const freeUsers = users.filter((user) => user.hobbies.length < 3)
    res.json(freeUsers)
})

app.put('/users/suggest', (req, res) => {
    const { codigo, hobby } = req.body

    if (!codigo || !hobby) {
        return res
            .status(400)
            .json({ error: 'Missing codigo or hobby parameter' })
    }

    const user = users.find((user) => user.codigo === codigo)

    if (!user) {
        return res.status(404).json({ error: 'User not found' })
    }

    if (user.hobbies.length >= 3) {
        return res.status(400).json({ error: 'User already has 3 hobbies' })
    }

    user.hobbies.push(hobby)
    res.json({ message: 'Hobby added successfully', user })
})

app.post('/users', (req, res) => {
    console.log(req.body)
    const { codigo, nombre, apellido, hobbies } = req.body

    if (!codigo || !nombre || !apellido || !hobbies || hobbies.length < 2) {
        return res.status(400).json({ error: 'Missing or invalid user data' })
    }

    const userExists = users.some((user) => user.codigo === codigo)

    if (userExists) {
        return res
            .status(400)
            .json({ error: 'User with this codigo already exists' })
    }

    const newUser = { codigo, nombre, apellido, hobbies }
    users.push(newUser)

    res.status(201).json({
        message: 'User registered successfully',
        user: newUser
    })
})

app.get('/users/:hobby/count', (req, res) => {
    const hobby = req.params.hobby

    if (!hobby) {
        return res.status(400).json({ error: 'Missing hobby parameter' })
    }
    const count = users.filter((user) => user.hobbies.includes(hobby)).length
    res.json({ count })
})

app.get('/users/:hobby', (req, res) => {
    const hobby = req.params.hobby
    const filteredUsers = users.filter((user) => user.hobbies.includes(hobby))
    res.json(filteredUsers)
})

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () =>
    console.log(`Example app listening on port ${port}! 
	url:http://localhost:${port}/users/hobby?hobby=lectura
	
	`)
)
