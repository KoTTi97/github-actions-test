#!/bin/bash

AUTH_HEADER="Authorization: Bearer $VERCEL_CI_TOKEN"

#API_ENDPOINT="https://api.vercel.com/v13/deployments/https://github-actions-test-iota.vercel.app"
API_ENDPOINT2="https://api.vercel.com/v6/deployments"

response2=$(curl -X GET "$API_ENDPOINT2" -H "$AUTH_HEADER")
echo "$response2"

# my_string="This is the string you want to capture"
# echo "::set-output name=my_output::$my_string"
