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

    const isExist = await Category.findOne({
      name: {
        $regex: category_name,
        $options: "i", // case insensitive search
      },
    });

    if (isExist) {
      return res.status(400).json({
        success: false,
        msg: "Category name already existe !!",
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

const getCategories = async (req, res) => {
  try {
    const categories = await Category.find({});

    return res.status(200).json({
      success: true,
      msg: "Category Fetched seccessfully !!",
      data: categories,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      msg: error.message,
    });
  }
};

const deleteCategory = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(200).json({
        success: false,
        msg: "Errors",
        err: errors.array(),
      });
    }

    const { id } = req.body;
    const categoryData = await Category.findOne({ _id: id });

    if (!categoryData) {
      return res.status(400).json({
        success: false,
        msg: `Category ID doesn't existe !!`,
      });
    }
    await Category.findByIdAndDelete({ _id: id });

    return res.status(200).json({
      success: true,
      msg: "Category Deleted seccessfully !!",
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      msg: error.message,
    });
  }
};
const updateCategory = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(200).json({
        success: false,
        msg: "Errors",
        err: errors.array(),
      });
    }

    const { id, category_name } = req.body;
    const categoryData = await Category.findOne({ _id: id });

    if (!categoryData) {
      return res.status(400).json({
        success: false,
        msg: `Category ID doesn't existe !!`,
      });
    }

    const isExist = await Category.findOne({
      _id:{$ne : id},
      name: {
        $regex: category_name,
        $options: "i", // case insensitive search
      },
    });

    if (isExist) {
      return res.status(400).json({
        success: false,
        msg: "Category name already assigned to another category !!",
      });
    }

    const updatedDeta = await Category.findByIdAndUpdate(
      { _id: id },
      {
        $set: {
          name: category_name,
        },
      },
      { new: true }
    );

    return res.status(200).json({
      success: true,
      msg: "Category Updated seccessfully !!",
      data: updatedDeta
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
  getCategories,
  deleteCategory,
  updateCategory,
};
