const router = require('express').Router()
const c=require('../controller/clientController')
router.get('/getclient',c.getClient)
module.exports= router