const { validationResult } = require("express-validator");
const Category = require("../models/categoryModel");
const addCategory = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(200).json({
        success: false,
        msg: "Errors",
        err: errors.array(),
      });
    }

    const { category_name } = req.body;

    const  isExist = await Category.findOne({
        name:{
            $regex : category_name ,
            $options : 'i'   // case insensitive search
        },
    });
        
    if (isExist) {
        return res.status(400).json({
            success: false,
            msg: 'Category name already existe !!',
          });
    }

    const category = new Category({
      name: category_name,
    });
    const categoryData = await category.save();
    return res.status(200).json({
      success: true,
      msg: "Category add seccessfully !!",
      data: categoryData,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      msg: error.message,
    });
  }
};

module.exports = {
  addCategory,
};
