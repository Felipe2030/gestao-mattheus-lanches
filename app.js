const express = require("express")
const app = express()
const path = require("path")
const routes = require('./src/routes/index')
const PORT = process.env.PORT || 3000

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/src/views'))
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }));
app.use('/', routes)

app.listen(PORT, () => { console.log(`Servidor rodando em http://localhost:${PORT}`) })