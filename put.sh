#!/bin/bash

curl -X PUT -i http://localhost:3000/profiles/ebc323a4-4554-48c4-9492-e9516249fa16 \
   -H "Content-Type: application/json" \
   -d '{
      "name": "Mustafa Satriani",
      "age": 30,
      "description": "Musta is a .NET developer who loves coding, gaming, and hiking."
   }'
