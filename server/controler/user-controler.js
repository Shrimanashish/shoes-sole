import User from '../schema/Product.js'
import userdata from '../schema/userdata.js';

 export const addUser = async(request,response) =>{
   const {Username , Email , CreatePassword , ConfirmPassword} = request.body;
   if(!Username || !Email , !CreatePassword , !ConfirmPassword){
      return response.status(409).json("Please fill proprerly")
   }
  
   try{
        const newData =  new userdata({Username , Email , CreatePassword , ConfirmPassword});
        await newData.save();
        response.status(201).json(newData);
   }catch(error){
      response.status(409).json({message:error.message});
   }
}

export const checkUser = async(request,response)=>{
   // console.log(request.body);
   const {Username , Password} = request.body;
   try{
    const user = await userdata.findOne({Username});
    response.status(200).json(user);
    if(!user){
      console.log("User not find");
    }else{
      console.log(user);
    }
   }catch(error){
      response.status(404).json({message:error.message});
   }
}

// addUser take two arrgument
// request response

export const getUser = async(request,response)=>{
   try{
    const user = await User.find({});
    response.status(200).json(user);
   }catch(error){
      response.status(404).json({message:error.message});
   }
}

export const getProductid = async (req, res) => {
  try{
     const productdata =  await User.findOne({name:req.body.id});
     res.status(200).json(productdata);
  }catch(error){
     res.status(404).json({message:error.message})
  }
 };

