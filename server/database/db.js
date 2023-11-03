import mongoose from 'mongoose'



const Connection = async(username,password)=>{
    const URL = `mongodb+srv://${username}:${password}@product-web.oumpj08.mongodb.net/`;
    try{
       await mongoose.connect(URL,{useUnifiedTopology:true, useNewUrlParser:true});
       console.log("database connected Successfully")
    }catch(error){
       console.log("database not Connected",error);
    }
}

export default Connection
// connect function
// two arrgument
// url
// object useUnifiedTopology useNewUrlParser asyncronusfunction