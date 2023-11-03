import axios from 'axios'
// user
// Ashish123456
const Url = "http://localhost:8000";
export const addUser = async(data)=>{  
    try{
      await axios.post(`${Url}/Login`, data);
    }catch(error){
       console.log("error while calling add User details" , error);
    }
}

export const checkUser = async(data)=>{  
  try{
    await axios.post(`${Url}/Sign`, data);
  }catch(error){
     console.log("error while calling add User details" , error);
  }
}



export const getUser = async()=>{
     try{
       return await axios.get(`${Url}/Product`)
     }catch(error){
        console.log("error while calling data from database ");
     }
}

export const getProductid = async(data)=>{
  try{
    return await axios.post(`${Url}/data`,data)
  }catch(error){
     console.log("error  calling data from database");
  }
}








 