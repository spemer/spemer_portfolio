#!/bin/bash

# deploy with firebase cli
firebase deploy

# commit
git add .
git commit -m 'Deploy'
git push


exit
