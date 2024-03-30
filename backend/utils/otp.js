// utils/otp.js

const nodemailer = require('nodemailer');
const crypto = require('crypto');

// Function to generate OTP
function generateOTP() {
    return Math.floor(100000 + Math.random() * 900000).toString();
}

// Function to send email with OTP
async function sendOTPByEmail(email, otp) {
    // Initialize Nodemailer transporter
    const transporter = nodemailer.createTransport({
        // Your email configuration
        service: 'gmail',
        auth: {
            user: 'shritech2025@gmail.com',
            pass: 'xadycfztkvmyuwti'
        }
    });

    // Email content
    const mailOptions = {
        from: 'shritech2025@gmail.com',
        to: email,
        subject: 'OTP for Registration Foxian Game' ,
        text: `Your OTP for registration is: ${otp}`
    };

    // Send email
    await transporter.sendMail(mailOptions);
}

module.exports = { generateOTP, sendOTPByEmail };
