import mongoose from 'mongoose'

//create Schema
const categorySchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
        maxLength:50,
        minLength:3,

    },
    image: String,
  });
  
  //create model
  const Category = mongoose.model("Category", categorySchema);

  export default Category