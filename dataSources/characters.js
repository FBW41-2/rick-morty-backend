const { default: axios } = require("axios")

let characters = []

const getCharacters = async () => {
    try {
        const response = await axios.get('https://rickandmortyapi.com/api/character')
        const data = response.data
        characters = data.results
        console.log("Characters loaded", data.info.count)
    } catch (error) {
        console.error("Unable to load characters", error)
    }
}

getCharacters()

const returnCharacters = () => {
    const randIndices = Array.from({length: 5}, () => Math.floor(Math.random() * characters.length))
    const selectedCharacters = randIndices.map(i => characters[i])
    return selectedCharacters
}

module.exports = returnCharacters