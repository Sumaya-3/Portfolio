const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
const router = express.Router();

// Middleware
app.use(cors());
app.use(express.json());
app.use("/", router);

// Environment variables
const { EMAIL_USER, EMAIL_PASS } = process.env;

// Nodemailer setup
const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS
  },
});

// Verify email connection
contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

// Routes
router.post("/contact", (req, res) => {
  const { firstName, lastName, email, message, phone } = req.body;
  const name = firstName + ' ' + lastName;

  const mailOptions = {
    from: name,
    to: "********@gmail.com",
    subject: "Contact Form Submission - Portfolio",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
  };

  contactEmail.sendMail(mailOptions, (error) => {
    if (error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(200).json({ code: 200, status: "Message Sent" });
    }
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Server setup
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Server Running on Port", PORT));