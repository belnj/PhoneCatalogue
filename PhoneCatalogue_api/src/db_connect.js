const mongoose = require('mongoose');
const config = require('./config/config');

mongoose.connect( config.MONGODB_URI , { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false  });

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function() {console.log('MongoDB open')});

module.exports = mongoose;