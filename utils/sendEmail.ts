import nodemailer from "nodemailer";



export const sendEmail = async (options: any) => {
  const transporter = nodemailer.createTransport({
    service: "sendgrid",
    host: process.env.EMAIL_SERVICE,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD
    },

  })

  const emailOptions = {
    from: process.env.EMAIL_FROM,
    to: options.email,
    subject: options.subject,
    html: options.text
  }


  await transporter.sendMail(emailOptions);
}

