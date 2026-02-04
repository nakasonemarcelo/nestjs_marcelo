#!/bin/bash

curl -X POST -i http://localhost:3000/profiles/ \
   -H "Content-Type: application/json" \
   -d '{
      "name": "Kalinda Jones",
      "age": 28,
      "description": "This Javascript developer the best developer in the entire world."
   }'
