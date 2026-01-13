const express = require('express');
const swaggerUI = require("swagger-ui-express");
const swaggerSpec = require("./config/swagger");
const userRoutes=require("./routes/userRoutes")
const itemRoutes= require("./routes/itemRoutes");
const app=express();

app.use(express.json());




app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));
app.use('/api/users',userRoutes);
app.use('/api/items',itemRoutes);



module.exports=app;