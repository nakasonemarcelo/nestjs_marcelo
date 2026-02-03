#!/bin/bash

curl -X POST -i http://localhost:3000/profiles/ \
   -H "Content-Type: application/json" \
   -d '{
      "name": "Kai", 
      "description": "This Javascript developer is a nerd who is afraid of women looks like a mingler."
   }'
