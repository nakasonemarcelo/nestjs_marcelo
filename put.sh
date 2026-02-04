#!/bin/bash

curl -X PUT -i http://localhost:3000/profiles/92a1c06b-8e81-487f-b7b6-5a4dc9005526 \
   -H "Content-Type: application/json" \
   -d '{
      "name": "Mustafa Satriani",
      "age": 30,
      "description": "Musta is a .NET developer who loves coding, gaming, and hiking."
   }'
