const express = require("express");
const jobsController = require("../controllers/Job.controller");

const jobsRouter = express.Router();

jobsRouter.get("", jobsController.getJobsController);

jobsRouter.get("/:id", jobsController.getJobByIdController);

jobsRouter.post("", jobsController.postJobController);

jobsRouter.put("/:id", jobsController.putJobController);

jobsRouter.delete("/:id", jobsController.deleteJobController);

module.exports = {jobsRouter};