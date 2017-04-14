var debug = require('debug')('express-gun:client')
var Gun = require('gun')
var gun = Gun(['http://localhost:3000/gun'])

var data = gun.get('data')
data.path('message').map().on(msg => {
  var date = new Date()
  debug(`${date.toString()} Message recieved ${JSON.stringify(msg.test, null, 3)}`)
})
