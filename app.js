const express = require("express");
require("dotenv").config();
const app = express(); 

const routes = require("./routes/index");

//PARSE JSON BODIES
app.use(express.json()); 

// CALL ROUTES
app.use("/", routes);  

const port = process.env.PORT || 3030;
app.listen(port, () => {
    console.log(`Server is running on port: http://localhost:${port}`);
});
