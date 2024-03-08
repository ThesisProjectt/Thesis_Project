const router = require('express').Router()
const client=require('../controller/clientController')

router.get('/getclient', client.getClient)
router.post("/signup", client.signUp);
router.post("/login", client.login );

module.exports= router