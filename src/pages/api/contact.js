export default function handler(req, res) {
  console.log(req.body);
  let nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: "aladinnenquirys@gmail.com",
      pass: "aldsalds",
    },
    secure: true,
  });

  const mailData = {
    from: "noreply@gmail.com",
    to: "development@aladinntech.in",
    subject: `Message From ${req.body.name}`,
    text: req.body.message,
    html: `<div>name: ${req.body.name}</div>\n
      <div>name: ${req.body.email}</div>\n
       <div>name: ${req.body.phone}</div>\n
      <div>name: ${req.body.message}</div>`,
  };

  transporter.sendMail(mailData, function (err, info) {
    if (err) res.status(200).json({ err: err });
    else res.status(200).json({ info: info });
  });
}
