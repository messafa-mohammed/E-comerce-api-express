const { validationResult } = require("express-validator");

const Permission = require("../../models/permissionModel");

const addPermition = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(200).json({
        success: false,
        msg: "Errors",
        err: errors.array(),
      });
    }
    const { permission_name } = req.body;
    const isExists = await Permission.findOne({ permission_name });

    if (isExists) {
      return res.status(400).json({
        success: false,
        msg: "Permission Name already exists !!",
      });
    }

    var obj = {
      permission_name,
    };

    if (req.body.default) {
      obj.is_default = parseInt(req.body.default);
    }

    const permission = new Permission(obj);
    const newPermission = await permission.save();
    return res.status(200).json({
      success: true,
      msg: "Permission added Successfully ",
      data: newPermission,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      msg: error.message,
    });
  }
};

const getPermitions = async (req, res) => {
  try {
    const permissions = await Permission.find({});

    return res.status(200).json({
      success: true,
      msg: "Permissions Fetched Successfully",
      data: permissions,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      msg: error.message,
    });
  }
};

const deletePermition = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(200).json({
        success: false,
        msg: "Errors",
        err: errors.array(),
      });
    }
    const {id} = req.body;
    await Permission.findByIdAndDelete({_id: id});
    return res.status(200).json({
      success: true,
      msg: `Permission Delete Successfully !!`
    })

  } catch (error) {
    return res.status(400).json({
      success: false,
      msg: error.message,
    });
  }
};

const updatePermition = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(200).json({
        success: false,
        msg: "Errors",
        err: errors.array(),
      });
    }
    const { id , permission_name } = req.body;
    const isExists = await Permission.findOne({ _id: id });

    if (!isExists) {
      return res.status(400).json({
        success: false,
        msg: "Permission ID not fond !!",
      });
    }

    const isNameAssigned = await Permission.findOne({
       _id: { $ne: id} ,
       permission_name
      });

    if (isNameAssigned) {
      return res.status(400).json({
        success: false,
        msg: "Permission Name already assigned to another permission !!",
      });
    }

    var UpdatePermission = {
      permission_name,
    };

    if (req.body.default != null) {
      UpdatePermission.is_default = parseInt(req.body.default);
    }

    const updatedPermission = await Permission.findByIdAndUpdate({_id:id},{
      $set :UpdatePermission
    },{new:true});
    return res.status(200).json({
      success: true,
      msg: "Permission updated Successfully ",
      data: updatedPermission,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      msg: `Permission ID is Not fond !!`,
    });
  }
};




module.exports = {
  addPermition,
  getPermitions,
  deletePermition,
  updatePermition
};
