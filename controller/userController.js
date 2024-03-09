const dataBase = require("../models/stingModel");
const asyncHandler = require("express-async-handler");

const measureExecutionTime = (startTime) => {
    const endTime = new Date();
    return endTime - startTime; // in milliseconds
}

const allData = asyncHandler(async (req, res) => {
    try {
        const startTime = new Date(); // Start measuring execution time
        const allData = await dataBase.find();
        const executionTime = measureExecutionTime(startTime); // Measure execution time
        res.json({ data: allData, executionTime });
    } catch (error) {
        throw new Error(error);
    }
});

const addData = asyncHandler(async (req, res) => {
    try {
        const startTime = new Date(); // Start measuring execution time
        const newString = await dataBase.create(req.body);
        const executionTime = measureExecutionTime(startTime); // Measure execution time
        res.json({ data: newString, executionTime });
    } catch (error) {
        throw new Error(error);
    }
});

const deleteData = asyncHandler(async (req, res) => {
    const { id } = req.params;
    try {
        const startTime = new Date(); // Start measuring execution time
        const deleteData = await dataBase.findByIdAndDelete(id);
        const executionTime = measureExecutionTime(startTime); // Measure execution time
        res.json({ data:deleteData,executionTime});
    } catch (error) {
      throw new Error(error);
    }
  });


  const updateData = asyncHandler(async (req, res) => {
    const { id } = req.params;
    try {
        const startTime = new Date(); // Start measuring execution time
        const updatedData = await dataBase.findByIdAndUpdate(id, req.body, {
            new: true,
          });
          const executionTime = measureExecutionTime(startTime); // Measure execution time
          res.json({data:updatedData,executionTime});
    } catch (error) {
      throw new Error(error);
    }
  });


  const resetData = asyncHandler(async (req, res) => {
   
    try {
        const startTime = new Date(); // Start measuring execution time
        await dataBase.deleteMany({});
        const executionTime = measureExecutionTime(startTime); // Measure execution time
    res.json({ message: "Data reset successfully",executionTime });
      
    } catch (error) {
      throw new Error(error);
    }
  });


module.exports = { addData, updateData, deleteData, resetData, allData };
