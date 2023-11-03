import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    name : String,
    price: String,
    description: String,
    MediaUrl: String,
});



const user =  mongoose.model('userdetail',userSchema);
export default user;
