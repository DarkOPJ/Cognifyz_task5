const Job = require("../models/Job.model");

// GET all jobs
async function getJobsController(req, res) {
  try {
    const jobs = await Job.find();
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

// GET a single job by id
async function getJobByIdController(req, res) {
  const id = req.params.id;

  try {
    const job = await Job.findById(id);
    if (job) {
      res.json(job);
    } else {
      res.status(404).json({ error: "Job not found" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

// POST a new job
async function postJobController(req, res) {
  const {
    title,
    type,
    description,
    location,
    salary,
    company: {
      name,
      description: companyDescription,
      contactEmail,
      contactPhone,
    } = {},
  } = req.body;

  if (
    !title ||
    !type ||
    !description ||
    !location ||
    !salary ||
    !name ||
    !companyDescription ||
    !contactEmail ||
    !contactPhone
  ) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    const job = new Job({
      title,
      type,
      description,
      location,
      salary,
      company: { name, description, contactEmail, contactPhone },
    });

    await job.save();

    res.status(201).json({ message: "Job created successfully!" });
  } catch (err) {
    res
      .status(500)
      .json({ error: "Failed to create job", details: err.message });
  }
}

// PUT update a job by id
async function putJobController(req, res) {
  const id = req.params.id;
  const {
    title,
    type,
    description,
    location,
    salary,
    company: {
      name,
      description: companyDescription,
      contactEmail,
      contactPhone,
    } = {},
  } = req.body;

  if (
    !title ||
    !type ||
    !description ||
    !location ||
    !salary ||
    !name ||
    !companyDescription ||
    !contactEmail ||
    !contactPhone
  ) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    const updatedJob = await Job.findByIdAndUpdate(
      id,
      {
        title,
        type,
        description,
        location,
        salary,
        company: {
          name,
          description: companyDescription,
          contactEmail,
          contactPhone,
        },
      },
      { new: true } // Return the updated document
    );

    // Check if the job exists
    if (!updatedJob) {
      return res.status(404).json({ error: "Job not found" });
    }

    // Respond with the updated job
    res.status(200).json({ message: "Job editted successfully!" });
  } catch (err) {
    res
      .status(500)
      .json({ error: "Failed to update job", details: err.message });
  }
}

// DELETE a job by id
async function deleteJobController(req, res) {
    const id = req.params.id;
    
    try {
      // Find and delete the job in one step
      const job = await Job.findByIdAndDelete(id);
      
      // Check if the job exists
      if (!job) {
        return res.status(404).json({ error: "Job not found" });
      }
      
      // Respond with the deleted job
      res.status(200).json({ message: "Job deleted successfully!" });
    } catch (err) {
      res.status(500).json({ error: "Failed to delete job", details: err.message });
    }
  }
  


module.exports = {
  getJobsController,
  getJobByIdController,
  postJobController,
  putJobController,
  deleteJobController,
};

// To insert multiple jobs into database
// function insertPostData() {
//       Job.insertMany([
//         {
//           "id": "1",
//           "title": "Senior React Developer",
//           "type": "Full-Time",
//           "description": "We are seeking a talented Front-End Developer to join our team in Boston, MA. The ideal candidate will have strong skills in HTML, CSS, and JavaScript, with experience working with modern JavaScript frameworks such as React or Angular.",
//           "location": "Boston, MA",
//           "salary": "$70K - $80K",
//           "company": {
//             "name": "NewTek Solutions",
//             "description": "NewTek Solutions is a leading technology company specializing in web development and digital solutions. We pride ourselves on delivering high-quality products and services to our clients while fostering a collaborative and innovative work environment.",
//             "contactEmail": "contact@teksolutions.com",
//             "contactPhone": "555-555-5555"
//           }
//         },
//         {
//           "id": "2",
//           "title": "Front-End Engineer (React & Redux)",
//           "type": "Full-Time",
//           "location": "Miami, FL",
//           "description": "Join our team as a Front-End Developer in sunny Miami, FL. We are looking for a motivated individual with a passion for crafting beautiful and responsive web applications. Experience with UI/UX design principles and a strong attention to detail are highly desirable.",
//           "salary": "$70K - $80K",
//           "company": {
//             "name": "Veneer Solutions",
//             "description": "Veneer Solutions is a creative agency specializing in digital design and development. Our team is dedicated to pushing the boundaries of creativity and innovation to deliver exceptional results for our clients.",
//             "contactEmail": "contact@loremipsum.com",
//             "contactPhone": "555-555-5555"
//           }
//         },
//         {
//           "id": "3",
//           "title": "React.js Dev",
//           "type": "Full-Time",
//           "location": "Brooklyn, NY",
//           "description": "Are you passionate about front-end development? Join our team in vibrant Brooklyn, NY, and work on exciting projects that make a difference. We offer competitive compensation and a collaborative work environment where your ideas are valued.",
//           "salary": "$70K - $80K",
//           "company": {
//             "name": "Dolor Cloud",
//             "description": "Dolor Cloud is a leading technology company specializing in digital solutions for businesses of all sizes. With a focus on innovation and customer satisfaction, we are committed to delivering cutting-edge products and services.",
//             "contactEmail": "contact@dolorsitamet.com",
//             "contactPhone": "555-555-5555"
//           }
//         },
//         {
//           "id": "4",
//           "title": "React Front-End Developer",
//           "type": "Part-Time",
//           "description": "Join our team as a Part-Time Front-End Developer in beautiful Pheonix, AZ. We are looking for a self-motivated individual with a passion for creating engaging user experiences. This position offers flexible hours and the opportunity to work remotely.",
//           "location": "Pheonix, AZ",
//           "salary": "$60K - $70K",
//           "company": {
//             "name": "Alpha Elite",
//             "description": "Alpha Elite is a dynamic startup specializing in digital marketing and web development. We are committed to fostering a diverse and inclusive workplace where creativity and innovation thrive.",
//             "contactEmail": "contact@adipisicingelit.com",
//             "contactPhone": "555-555-5555"
//           }
//         },
//         {
//           "id": "5",
//           "title": "Full Stack React Developer",
//           "type": "Full-Time",
//           "description": "Exciting opportunity for a Full-Time Front-End Developer in bustling Atlanta, GA. We are seeking a talented individual with a passion for building elegant and scalable web applications. Join our team and make an impact!",
//           "location": "Atlanta, GA",
//           "salary": "$90K - $100K",
//           "company": {
//             "name": "Browning Technologies",
//             "description": "Browning Technologies is a rapidly growing technology company specializing in e-commerce solutions. We offer a dynamic and collaborative work environment where employees are encouraged to think creatively and innovate.",
//             "contactEmail": "contact@consecteturadipisicing.com",
//             "contactPhone": "555-555-5555"
//           }
//         },
//         {
//           "id": "6",
//           "title": "React Native Developer",
//           "type": "Full-Time",
//           "description": "Join our team as a Front-End Developer in beautiful Portland, OR. We are looking for a skilled and enthusiastic individual to help us create innovative web solutions. Competitive salary and great benefits package available.",
//           "location": "Portland, OR",
//           "salary": "$100K - $110K",
//           "company": {
//             "name": "Port Solutions INC",
//             "description": "Port Solutions is a leading technology company specializing in software development and digital marketing. We are committed to providing our clients with cutting-edge solutions and our employees with a supportive and rewarding work environment.",
//             "contactEmail": "contact@ipsumlorem.com",
//             "contactPhone": "555-555-5555"
//           }
//         },
//         {
//           "id": "7821",
//           "title": "SOC Analyst",
//           "type": "Full-Time",
//           "description": "As a SOC Analyst at CyberSecure Solutions, you will play a critical role in monitoring and defending our clients' digital environments. You will be responsible for identifying, analyzing, and responding to cybersecurity incidents, ensuring threats are contained and resolved efficiently.",
//           "location": "Tsado, Accra",
//           "salary": "$150K - 175K",
//           "company": {
//             "name": "CyberSecure Solutions",
//             "description": "CyberSecure Solutions is a leading provider of cybersecurity services, specializing in managed security operations, incident response, and threat intelligence. We are committed to helping organizations protect their digital assets and mitigate risks in an ever-evolving threat landscape.",
//             "contactEmail": "careers@cybersecuresolutions.com",
//             "contactPhone": "+1 (800) 555-1234"
//           }
//         }
//       ]);
// }
// insertPostData();
