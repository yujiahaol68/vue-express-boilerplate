const express = require('express');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser');
const compression = require('compression');
const path = require('path');
const logger = require('morgan');
const config = require('./config');

// routes modules
const api = require('./router/api');

let app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Mount api before csrf is appended to the app stack 
app.use('/api', api);

app.use(logger('dev'))
	.use(helmet())
    .use(bodyParser.urlencoded({ extended: false }))
    .use(bodyParser.json())
	.use(cookieParser())
	.use(methodOverride())
	.use(compression({filter: shouldCompress}))
	.use(express.static(path.join(__dirname, 'public')));


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


app.listen(config.port, function(err) {
	if(err) console.warn(err);
	console.warn('Listening on http://localhost:' + config.port);
});


function shouldCompress(req, res) {
	if (req.headers['x-no-compression']) {
		// don't compress responses with this request header 
		return false;
	}

	// fallback to standard filter function 
	return compression.filter(req, res);
}
