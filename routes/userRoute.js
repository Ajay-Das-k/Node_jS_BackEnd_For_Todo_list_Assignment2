
const express = require("express");
const userRoute = express();
const {addData,updateData,deleteData,resetData,Count,allData} = require("../controller/userController");
const executionTimeMiddleware = require('../middlewares/executionTime')

userRoute.use(express.json());
// userRoute.use(express.urlencoded({ extended: true }));

userRoute.use(executionTimeMiddleware);
let addCount = 0;
let updateCount = 0;
userRoute.use((req, res, next) => {
    if (req.path === '/addData') {
      addCount++;
    } else if (req.path.startsWith('/edit-data')) {
        updateCount++;
    }
    next();
  });

userRoute.get("/allData",allData);
userRoute.post("/addData",addData);
userRoute.put("/edit-data/:id",updateData);
userRoute.delete("/deleteData/:id",deleteData);
userRoute.get("/resetData",resetData);


userRoute.get('/count', (req, res) => {
    res.json({ addCount, updateCount });
  });

module.exports = userRoute;