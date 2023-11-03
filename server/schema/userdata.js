import mongoose from 'mongoose'
import autoIncrement from 'mongoose-auto-increment'

const userSchema = new mongoose.Schema({
    Username:String,
    Email: String,
    CreatePassword : String,
    ConfirmPassword : String,
    // password: String,
});




autoIncrement.initialize(mongoose.connection);
// userSchema.plugin(autoIncrement.plugin,'identycounter');
const userdata =  mongoose.model('identycounter',userSchema);
export default userdata;
