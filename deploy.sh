#!/bin/bash

# get commit message
read -p "Enter commit message: " commitmsg

# run on a local server with gulpfile.js
# sudo gulp watch

# deploy with firebase cli
firebase deploy


# commit
git add .
git commit -m $commitmsg
git push


exit
