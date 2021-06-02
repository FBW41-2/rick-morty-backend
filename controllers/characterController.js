const characters = require('../dataSources/characters')

exports.getCharacters = (req, res) => {
    res.json(characters())
}