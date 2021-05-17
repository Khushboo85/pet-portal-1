const logger = require('./logger')
// require("dotenv").config();
const express = require("express");
const cors = require('cors');
const Router = require("./router");


const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", Router);
const port =  4001;
app.listen(port, () => {
  console.log(`Backend up and running on PORT : ${port}`);
});