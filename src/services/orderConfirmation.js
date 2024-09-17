const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

dotenv.config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const sendOrderConfirmationEmail = async (to, mpesaCode) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: to,
    subject: 'Order Confirmation',
    text: `Thank you for your order! Your M-PESA confirmation code is: ${mpesaCode}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error: 'Error sending confirmation email' };
  }
};

module.exports = { sendOrderConfirmationEmail };