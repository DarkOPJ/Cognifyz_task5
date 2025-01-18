require("dotenv").config();

const express = require("express");
const cors = require('cors');
const connectDB = require("./server/config/db");
const {jobsRouter} = require("./server/routers/Job.router");

const PORT =  process.env.PORT || 3000;

const app = express();

// Middleware
app.use(cors({
    origin: 'https://devjobs-rouge.vercel.app', // Replace with your frontend's origin
}));
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

app.get('/', (req, res) => {
    res.send("<h1>Welcome to Job Portal API.</h1> <h2>If this is not your for you to use, you are not welcome.</h2>");
});

// Routes
app.use("/jobs", jobsRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});