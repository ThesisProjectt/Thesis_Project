const db=require('../model/clientModel')
const getClient=async(req,res)=>{
    try{
        const x=await db.getClient();
        res.status(201).json(x);
    }catch(err){
        console.log("Error in getting client", err);
        res.status(500).send(err)
    }
}
module.exports={
    getClient
}