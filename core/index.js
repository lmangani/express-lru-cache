var app = require('./app').app

// load modules
require('./http')(app)
require('./logger')(app)
require('./routes')(app)

module.exports = app
