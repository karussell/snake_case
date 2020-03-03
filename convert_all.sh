#!/bin/bash

if [ "$#" -ne 1 ]; then
    echo "usage: ./convert_all.sh dir"
    exit
fi

DIR=$1

for file in $DIR/*.yml; do
  filename=$(basename "$file" .yml)
  node snake_case.js $DIR/$filename.yml gh=true > $DIR/$filename-tmp.yml
  mv -i $DIR/$filename.yml $DIR/$filename-old.yml
  mv $DIR/$filename-tmp.yml $DIR/$filename.yml
done