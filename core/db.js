var LRU = require("lru-cache")
  , options = { max: 5000
              , length: function (n, key) { return n * 2 + key.length }
	      , dispose: function (key, n) { return key.length }
              , maxAge: 1000 * 60 * 60 }
  , cache = LRU(options)
  , otherCache = LRU(50) // sets just the max size

module.exports = cache
