#!/bin/bash

# run on a local server with gulpfile.js
# sudo gulp watch

# deploy with firebase cli
firebase deploy

# commit
git add .
git commit -m 'Deploy'
git push


exit
