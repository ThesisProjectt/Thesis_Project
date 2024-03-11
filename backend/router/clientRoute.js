const router = require('express').Router()
const client=require('../controller/clientController')
// const {checkToken} = require("../middleware/authorization")

// router.use(checkToken)
router.get('/getclient', client.getClient)
router.post("/signup", client.signUp);
router.post("/login", client.login );
router.put("/newpwd", client.changePassword)

module.exports= router