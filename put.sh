#!/bin/bash

curl -X PUT -i http://localhost:3000/profiles/d08c86ae-9cc5-403b-bac1-2f564d214371 \
   -H "Content-Type: application/json" \
   -d '{
      "name": "Mustafa Satriani",
      "age": 30,
      "description": "Musta is a .NET developer who loves coding, gaming, and hiking."
   }'
