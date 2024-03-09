const dataBase = require("../models/stingModel");
const asynHandler = require("express-async-handler");

const allData= asynHandler(async (req, res) => {
    
    try {
        const allData = await dataBase.find();
        res.json(allData);
    } catch (error) {
      throw new Error(error);
    }
  });

const addData = asynHandler(async (req, res) => {
   
    try {
        const newString = await dataBase.create(req.body);
        res.json(newString);
     
    } catch (error) {
      throw new Error(error);
    }
  });

  const deleteData = asynHandler(async (req, res) => {
    const { id } = req.params;
    try {
        const deleteData = await dataBase.findByIdAndDelete(id);
        res.json({
          deleteData,
        });
    } catch (error) {
      throw new Error(error);
    }
  });


  const updateData = asynHandler(async (req, res) => {
    const { id } = req.params;
    try {
        const updatedData = await dataBase.findByIdAndUpdate(id, req.body, {
            new: true,
          });
          res.json(updatedData);
    } catch (error) {
      throw new Error(error);
    }
  });


  const resetData = asynHandler(async (req, res) => {
   
    try {
        await dataBase.deleteMany({});
    res.json({ message: "Data reset successfully" });
      
    } catch (error) {
      throw new Error(error);
    }
  });

  const Count= asynHandler(async (req, res) => {
    
    try {
      
    } catch (error) {
      throw new Error(error);
    }
  });



module.exports = {addData,updateData,deleteData,resetData,Count,allData}