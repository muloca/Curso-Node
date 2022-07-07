const express = require('express')
// const path = require('path')
//Cors
const cors = require('cors')

const app = express()

const routes = require('./routes/routes')

const db = require('./database/database')

// app.set('view engine', 'ejs')
// app.set('views', path.join(__dirname, 'views'))

db.connect()


// CORS com proteção de dominios
const allowedOrigins = [
    'http://127.0.0.1:5500',
    'https://magnuseducacao.com.br'
]

// Habilitando o Cors
app.use(cors({
    origin: function(origin, callback){
        let allowed = true
        
        //App Mobile
        if(!origin) allowed = true

        if(!allowedOrigins.includes(origin)) allowed = false
        
        callback(null, allowed)
    }
}))

//Habilita o CORS para todo mundo
// app.use(cors())

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