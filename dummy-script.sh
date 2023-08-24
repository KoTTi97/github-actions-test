#!/bin/bash

# Your script logic here
my_string="This is the string you want to capture"

# Set the output using set-output
echo "::set-output name=my_output::$my_string"
