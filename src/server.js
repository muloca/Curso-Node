const express = require('express')
// const path = require('path')

const app = express()

const routes = require('./routes/routes')

const db = require('./database/database')

// app.set('view engine', 'ejs')
// app.set('views', path.join(__dirname, 'views'))

db.connect()

// app.use(express.static(path.join(__dirname, 'public')))

// app.use(express.urlencoded({ extended: true }))

//Habilita server para recebr dados no formato JSON
app.use(express.json())

app.use('/api', routes)

// app.use((req, res) => {
//     res.send('Página não encontrada')
// })

const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Servidor iniciado na porta ${port}`))