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
printf "\n"
firebase deploy

# enter commit message
printf "\n"
IFS= read -r -p "Enter commit message: " commitmsg
git add .

# commit
if [ -z "$commitmsg" ]
then
    echo "commit message is empty"
    git commit -m "Add files via upload"
else
    git commit -m "$commitmsg"
fi

git push

exit
