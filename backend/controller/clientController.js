const db=require('../model/clientModel')
const getClient=async(req,res)=>{
    try{
        const x=await db.getClient();
        res.status(201).json(x);
    }catch(err){
        console.log("Error in getting client", err);
    }
}
module.exports={
    getClient
}