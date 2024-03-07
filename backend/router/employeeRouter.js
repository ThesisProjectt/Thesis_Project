const router = require('express').Router()
const c=require('../controller/employeeController')
router.get('/getemployee',c.getEmployee)
router.post('/postemployee',c.postEmployee)
module.exports= router