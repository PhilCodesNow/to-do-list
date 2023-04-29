const mongooseVar = require('mongoose')
const Schema = mongooseVar.Schema


const toDoSchema = new Schema({
    todo: {
        type: String,
        required: true
    }
})

 

const todo = mongooseVar.model('todo', toDoSchema)
module.exports = todo

