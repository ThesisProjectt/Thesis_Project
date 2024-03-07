const db=require('../model/employeeModel')
const getEmployee=async(req,res)=>{
    try{
        const x=await db.getEmployee();
        res.status(201).json(x);
    }catch(err){
        console.log("Error in getting Employee", err);
    }
}
const postEmployee=async(req,res)=>{
    try{
        const x=await db.createEmployee(req.body)
        res.status(202).json(x)
    }catch(err){
        console.log("Error in creating Employee", err);
    }
}
module.exports={
    getEmployee,
    postEmployee
}