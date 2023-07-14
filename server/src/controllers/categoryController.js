import Category from "../models/categoryModel.js";
export const postCategory = async (req, res) => {
    try {
      const { type, image } = req.body;
      console.log(type);
      console.log(image);
  
      const product = await Category.create({
        type: req.body.type,
        image: req.body.image,
      });
  
      await product.save();
      return res.status(200).json({
        success: true,
        msg: "Post the Product successfully",
        data: product,
      });
    } catch (error) {
      return res.status(404).json({
        success: false,
        msg: "Error Occur",
      });
    }
  };
  
  //get
  
  export const getCategory = async (req, res) => {
    try {
      const product = await Category.find();
  
      return res.status(201).json({
        success: true,
        msg: "Get the products successfully",
        data: product,
      });
    } catch (error) {
      return res.status(404).json({
        success: false,
        msg: "Error Occur",
      });
    }
  };