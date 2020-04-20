const Product= require('../model/model')



module.exports={
    home:(req,res)=>{
        Product.find((err,result)=>{
            if(err){
                res.status(400).json({message:"Error"})
            }
            else{
                res.json(result)
            }
        })
    },

    newProduct:(req,res)=>{
        let data= new Product(req.body)

        data.save().then(
            myRes=>{
                res.status(200).json({message:"New Data Creation Success"})
            }
        ).catch(err=>{
            res.status(400).json({message:"New Data Creation Failed"})
        })
    },


    edit:(req,res)=>{
        let id= req.params.id;


        Product.findById({_id:id},(err,result)=>{
            if(err){
                res.status(400).json({message:"Data Fetching Failed"})
            }
            else{
                res.json(result)
            }

        })

    },


    update:(req,res)=>{
        let id=req.params.id

        Product.findById({_id:id},(err,result)=>{
            if(err){
                res.status(400).json({message:"Sorry it's an Error"})
            }

            if(!result){
                res.status(400).json({message:"Sorry No data found"})
            }

            else{

                result.title=req.body.title
                result.price=req.body.price
                result.image=req.body.image
                result.description=req.body.description


                result.save().then(myRes=>{
                    res.status(200).json({message:"Data updation Success"})
                }).catch(err=>{
                    res.status(400).json({message:"Data updation Failed"})
                })

            }
        })
    },

    delete:(req,res)=>{
        let id=req.params.id;
        Product.findByIdAndDelete({_id:id},(err,result)=>{
            if(err){
                res.status(400).json({message:"Data Deletion Failed"})
            }

            else{
                res.status(200).json({message:"Data Deletion Success"})
            }
        })
    }


}