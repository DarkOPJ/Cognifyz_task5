require("dotenv").config();

const express = require("express");
const connectDB = require("./server/config/db");
const {jobsRouter} = require("./server/routers/Job.router");

const PORT =  3000 || process.env.PORT;

const app = express();

// Middleware
app.use(express.json());

// Middleware to log the request method and URL
app.use((req, res, next) => {
    const start = Date.now()
    next()
    const delta = Date.now() - start
    console.log(req.method + " " + req.baseUrl + req.url + " " + delta +"ms")
})

// Connect to MongoDB
connectDB();

app.use("/jobs", jobsRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});