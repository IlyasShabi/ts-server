import * as mongoose from "mongoose";

let schema = new mongoose.Schema({
    
});

// generating a hash
// schema.methods.generateHash = (password) => {
//     return helper.generateHash(password);
// };

// // checking if password is valid
// schema.methods.validPassword = (password) => {
//     return helper.compareHash(password, this.password);
// };

//schema.plugin(mongoosePaginate);

module.exports = mongoose.model('Product', schema);