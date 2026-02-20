const express = require("express");
const Job = require("../models/Job");
const protect = require("../middleware/authMiddleware");

const router = express.Router();


// 🔹 CREATE Job
router.post("/", protect, async (req, res) => {
  try {
    const { company, role, status } = req.body;

    const job = await Job.create({
      company,
      role,
      status,
      user: req.user._id,
    });

    res.status(201).json(job);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});


// 🔹 GET All Jobs (Only for logged in user)
router.get("/", protect, async (req, res) => {
  try {
    const jobs = await Job.find({ user: req.user._id });
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});


// 🔹 UPDATE Job
router.put("/:id", protect, async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);

    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }

    if (job.user.toString() !== req.user._id.toString()) {
      return res.status(401).json({ message: "Not authorized" });
    }

    job.company = req.body.company || job.company;
    job.role = req.body.role || job.role;
    job.status = req.body.status || job.status;

    const updatedJob = await job.save();

    res.json(updatedJob);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});


// 🔹 DELETE Job
router.delete("/:id", protect, async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);

    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }

    if (job.user.toString() !== req.user._id.toString()) {
      return res.status(401).json({ message: "Not authorized" });
    }

    await job.deleteOne();

    res.json({ message: "Job removed" });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
