const expressVar = require('express')
const app = expressVar()
const bodyParserVar = require('body-parser')
const mongooseVar = require('mongoose')
const { log } = require('console')
// env file
require('dotenv').config()

// require todoModel
const todoVar = require('./models/todoModel')



//// port
const port = 3000
app.listen(port, () => console.log(`Server is running on port ${port}`))


// set view engine
app.set('view engine', 'ejs')
// sets public for static file for ejs???
app.use(expressVar.static('public'))
// app.use(bodyParser.urlencoded({extended: true}))
// app.use(bodyParser.json())


///////// env
const dbUrl = process.env.DATABASE_URL


// db
mongooseVar.connect(dbUrl)
// db console messages
mongooseVar.connection.on('error', (error) => console.log(error))
mongooseVar.connection.once('open', () => console.log('Connected to db'))



/// Renders base path
app.get('/', (req, res) =>{
    res.render('indexView')
})


