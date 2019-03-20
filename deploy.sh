#!/bin/bash
prjname="spemer_portfolio"

echo "=============================="
echo ${prjname}
echo "=============================="

# run on a local server with gulpfile.js
trap 'echo Stop gulp-watch' SIGINT
npm update caniuse-lite browserslist
sudo gulp watch
trap SIGINT

# deploy with firebase cli
firebase deploy

# get commit message
printf "\n"
IFS= read -r -p "Enter commit message: " commitmsg

# commit
git add .
git commit -m "$commitmsg"
git push

exit
