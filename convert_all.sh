#!/bin/bash

if [ "$#" -ne 1 ]; then
    echo "usage: ./convert_all.sh dir"
    exit
fi

DIR=$1

for file in $DIR/*.yml; do
  filename=$(basename "$file" .yml)
  node snake_case.js $filename.yml gh=true > $filename-tmp.yml
  mv $filename.yml $filename-old.yml
  mv $filename-tmp.yml $filename.yml
done