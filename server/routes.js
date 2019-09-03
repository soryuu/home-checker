
const express = require('express')
const rosreestrCtrl = require('./controllers/rosreestr')

const router = express.Router()

router.post('/rosreestr/:type', rosreestrCtrl)
// router.post('/payture/:type', paytureCtrl); ** Интеграция платежки

module.exports = router
