#!/bin/bash

curl -v -H "Content-type: application/json" -d\
 '{"action":"greetingService","method":"sayHello","data":{"user":{"firstName":"aa","lastName":"bb"}},"type":"rpc","tid":1}'\
 http://localhost:8080/ext-direct-sample/direct/router
