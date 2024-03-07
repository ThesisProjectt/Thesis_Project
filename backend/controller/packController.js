const db = require('../model/packModel') 
// const db = require ('../database/index') 

module.exports = {
    add : async (req,res) => {
       try{
        const added = await db.Pack.create(req.body)
        res.json(added)
       }
       catch(error){console.log("error")}
      },
      
      getPack: async(req,res)=>{
        try {
            const gotten = await db.Pack.findAll({})
            res.json(gotten)
        }
        catch(error){console.log("error")}
      },


      getPacks: async (req,res)=>{
        try {
            const gotten = await db.Pack.findAll({})
    res.json(gotten)
        }
        catch(error){console.log("error")}
      },
      
      updatePack: async (req,res)=>{
        
        try {
            const updated = db.Pack.update(req.body,{where:{id:req.params.id}})
      res.json(updated)
        }
        catch(error){console.log("error")}
},
    deletePack: async(req,res)=>{
        try {
            const deleted=await db.Pack.destroy({where:{id:req.params.id}})
            res.json(deleted)
        }
        catch(error){console.log("error")}
    }
}

