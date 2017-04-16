const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');
const logger = require('morgan');
const config = require('./config');

// routes modules
const api = require('./router/api');

let app = express();

app.use(logger('dev'))
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({ extended: false }))
    .use(cookieParser());

app.use('/api', api);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = config.debug === true ? err : {};

  // render the error page
	res.status(err.status || 500);
	res.render('error');
});

if(!module.parent) {
	app.listen(config.port, function(err) {
		if(err) console.warn(err);
		console.warn('Listening on http://localhost:' + config.port);
	});
}

module.exports = app;
