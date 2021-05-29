var mailgun = require("mailgun-js")({apiKey: process.env.API_KEY, domain: process.env.DOMAIN})

const sendWelcomeEmail = (email, name) => {
    mailgun.messages().send({
        from: 'Excited User <me@samples.mailgun.org>',
        to: email,
        subject: `Hello ${name}` ,
	    text: `Welcome ${name}!!, This is a good task service`
    })
}

const sendCancellationEmail = (email, name) => {
    mailgun.messages().send({
        from: 'Excited User <me@samples.mailgun.org>',
        to: email,
        subject: `Hello ${name}` ,
	    text: `Hello ${name}!!, Sad to see you go`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail
}


