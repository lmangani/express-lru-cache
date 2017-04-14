# ExpressJS App with LRU-CACHE

This example App exposes [LRU-CACHE](https://www.npmjs.com/package/lru-cache) via a simple REST API

### Options
* ```PORT```: Express API Port _(default: 3000)_
* ```MAX```:  LRU Max Cache Size _(default: 3000)_

### API Calls

| Call  	    | Format  	| Response  |
|---	    |---	|---  |
| SET  	  | ```/api/set/{key}/{value}```  	| ```{status}``` |
| GET  	  | ```/api/get/{key}```  	| ```{value}``` |
| UNSET  	| ```/api/unset/{key}```  	| ```{status}``` |


### Example
##### GET
```
curl http://127.0.0.1:3000/api/set/something/good
```
```
curl http://127.0.0.1:3000/api/get/something
```

##### POST
```
curl -X POST -H "Content-type: application/json" \
  -d '{"taste": "great"}' \
  http://127.0.0.1:3000/api/set/something
```
```
curl http://127.0.0.1:3000/api/get/something
```
