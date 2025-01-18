const express = require("express");
const jobsController = require("../controllers/Job.controller");

const jobsRouter = express.Router();

// Get all jobs
jobsRouter.get("", jobsController.getJobsController);

// Get a single job by id
jobsRouter.get("/:id", jobsController.getJobByIdController);

// Create a new job
jobsRouter.post("", jobsController.postJobController);

// Update an existing job by id
jobsRouter.put("/:id", jobsController.putJobController);

// Delete a job by id
jobsRouter.delete("/:id", jobsController.deleteJobController);

module.exports = {jobsRouter};