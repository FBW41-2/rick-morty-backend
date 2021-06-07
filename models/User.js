const { model, Schema } = require('mongoose')

const userSchema = new Schema({
    name: {
        type: String,
        unique: true
    },
    password: String,
    characters: [Number]
})

module.exports = model('User', userSchema)