# ExpressJS App with LRU-CACHE

This example App exposes [LRU-CACHE](https://www.npmjs.com/package/lru-cache) via a simple REST API

### Options
* ```PORT```: Express API Port _(default: 3000)_
* ```MAX```:  LRU Max Cache Size _(default: 3000)_
### API Calls

#### SET
```/api/set/{key}/{value}```
#### UNSET
```/api/unset/{key}```
#### GET
```/api/set/{key}```

