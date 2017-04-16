let config = {
    // Debug mode
	debug: true,
    // MongoDB connect address
	db: "mongodb://root:root@127.0.0.1:27017/example",
	// Express Listen port
	port: 3000,
    // SMTP Email configuration
    emailSender: {
        service: '163',
        auth: {
            user: '',
            pass: ''
        }
    },
    // Mail options
    mailOptions: {
        from: '',
        to: '',
        subject: '',
        text: '',
        html: ''
    }
};

module.exports = config;