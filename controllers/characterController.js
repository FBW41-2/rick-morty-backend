const { getFiveRandomCharacters, getAllCharacters } = require('../dataSources/characters')
const User = require('../models/User')

exports.getCharacters = (req, res) => {
    res.json(getFiveRandomCharacters())
}

exports.collectCharacter = async (req, res) => {
    const data = req.body
    const userId = '60bde70b21f9591321a59736'

    try {
        const result = await User.findByIdAndUpdate(userId, { $push: { characters: data.character } }, {new: true})
        console.log("user", result)
    } catch (error) {
        console.error(error)
    }
    
    res.json({collected: data.character})
}

exports.getCollection = async (req, res) => {
    const userId = '60bde70b21f9591321a59736'

    const user = await User.findById(userId)

    const collection = getAllCharacters().filter(item => user.characters.includes(item.id))

    res.json(collection)
}