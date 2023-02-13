import Job from "../models/job.js";

export const getJobs = async (req, res) => {
    try {
      const jobs = await Job.find();
      res.status(200).json(jobs);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  //GET Job BY ID
export const getJobsByid = async (req, res) => {
  const { id } = req.params;
  try {
    const jobs = await Job.findById(id);
    res.status(200).json(jobs);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

//POST NEW Job
export const addJobs = async (req, res) => {
  console.log(req);
  const newJob = new Job(req.body);
  try {
    await newJob.save();
    res.status(201).json(newJob);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};