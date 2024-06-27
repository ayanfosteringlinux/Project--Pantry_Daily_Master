const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail', // or any other service
  auth: {
    user: 'official.ayan.ahmad@gmail.com',
    pass: 'bfxzdcbhhfgskyds'
  }
});

app.post('/send-email', (req, res) => {
  const { title } = req.body;

  const mailOptions = {
    from: 'official.ayan.ahmad@gmail.com',
    to: 'siddharths.x.chaudhari@fosteringlinux.com',
    subject: `Order Request: ${title}`,
    text: `I would like to order a ${title}. Please deliver it to my desk.`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).json({ message: 'Failed to send email', error });
    }
    res.status(200).json({ message: 'Email sent successfully', info });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
