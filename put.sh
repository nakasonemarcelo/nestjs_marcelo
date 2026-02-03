#!/bin/bash

curl -X POST -i http://localhost:3000/profiles/ \
   -H "Content-Type: application/json" \
   -d '{
      "name": "Kai", 
      "description": "This Javascript developer is the best developer of the world."
   }'
