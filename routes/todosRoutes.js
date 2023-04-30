const express = require('express')
const router = express.Router()
const bodyParserVar = require('body-parser')
const Todos = require('../models/todoModel')



router.get('/', (req, res) =>{
    res.render('todos')
})


router.post('/', (req, res) =>{
    const todo = new Todos({
        todo: req.body.todoName
    })
    todo.save()
    res.redirect('/todos')
})




module.exports = router