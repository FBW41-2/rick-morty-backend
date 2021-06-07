const { Router } = require('express')
const { getCharacters, collectCharacter, getCollection } = require('../controllers/characterController')

const router = Router()

router
    .route('/')
    .get(getCharacters)

router.post('/collect', collectCharacter)

router.get('/collection', getCollection)

module.exports = router