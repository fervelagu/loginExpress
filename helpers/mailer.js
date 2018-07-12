const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: process.env.gmail,
        pass: process.env.gpass
    }
});

exports.sendWelcomeMail = (user) => {
    const data = {
        from: 'Kiubo? 👾 <fvel4z@gmail.com>',
        to: user.email,
        subject: 'Probandola',
        text: 'Awesome Message',
        html: '<b>Awesome Message</b>'
    }
    transporter.sendMail(data)
        .then(info => console.log(info))
        .catch(error => console.log(error))
}

// transporter.sendMail({
//     .then(info => console.log(info))
//     .catch(error => console.log(error))
//   })
