#!/bin/bash

# Your script logic here
my_string="This is the string you want to capture"

echo "Value of VERCEL_CI_TOKEN: $VERCEL_CI_TOKEN"

# Set the output using set-output
echo "::set-output name=my_output::$my_string"
