require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./configs/db.config");
const characterRoutes = require("./routes/routes");
const errorHandler = require("./middlewares/errorHandler");

const app = express();
const port = process.env.PORT || 3000;

// app.use(cors());

//for deploy
app.use(cors(
  {
    origin: "*",
    credentials:true
  }
));

app.use(express.json());

// Database Connection
connectDB();

// Use the character routes
app.use('/api', characterRoutes);  

// Error Handling Middleware 
app.use(errorHandler);

// Start Server
app.listen(port, () => {
  console.log(`Shahnameh API running at http://localhost:${port}`);
});