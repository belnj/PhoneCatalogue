const express = require('express')
const morgan = require('morgan');
const path = require('path');
const phones = require('./routes/phones.js');
const config = require('./config/config');
const errorHandler = require('./errorHandler');
const bodyParser = require('body-parser');
const timeout = require('connect-timeout');
const cors = require('cors');
const helmet = require('helmet');

const app = express()
//Data base connection
const { mongoose } = require('./db_connect');

//Settings
app.set('port', config.PORT );

//Middleware
app.use(cors())
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(timeout('5s')); //return 503 error if the request exceed 5s

//Router to handle requests
app.use('/phones', phones);

//Static Images 
app.use('/images', express.static(path.join(__dirname, 'public/images')));

//The route doesn't exists so we return 404
app.use(function(req, res, next) {
  res.status(404).json({ error: 'Not found' });
});

//errors handler
app.use(errorHandler);


//Start server
app.listen(app.get('port'), () => {
  console.log(`Example app listening at http://localhost:${app.get('port')}`)
})

module.exports = app;