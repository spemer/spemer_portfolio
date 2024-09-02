#!/bin/bash
BOLD=$(tput bold)
RESET=$(tput sgr0)
RED=$(tput setaf 1)
GREEN=$(tput setaf 2)

echo "============================================================"
echo "${BOLD}${PWD##*/}${RESET}"
echo "============================================================"

#============================================================
# run gulpfile.js (localhost:3000)
#============================================================
run_gulpfile() {
  while true; do
    printf "\n"
    read -p "${BOLD}${GREEN}Run gulpfile.js? (Y/n) ${RESET}" yn
    case ${yn} in
      [Yy]* )
        trap 'echo Stop gulp-watch' SIGINT
        npm update caniuse-lite browserslist
        sudo gulp default
        trap SIGINT
        break;;

      [Nn]* ) return 0;;
      * ) echo "Please answer yes or no.";;
    esac
  done
}

#============================================================
# deploy with firebase cli
#============================================================
firebase_deploy() {
  while true; do
    printf "\n"
    read -p "${BOLD}${GREEN}firebase deploy? (Y/n) ${RESET}" yn
    case ${yn} in
      [Yy]* ) firebase deploy; break;;
      [Nn]* ) return 0;;
      * ) echo "Please answer yes or no.";;
    esac
  done
}

#============================================================
# git commit
#============================================================
git_commit() {
  while true; do
    printf "\n"
    read -p "${BOLD}${GREEN}git commit? (Y/n) ${RESET}" yn
    case ${yn} in
      [Yy]* )
        IFS= read -r -p "${BOLD}Enter commit message: ${RESET}" commitmsg

        # if commitmsg empty
        if [ -z "$commitmsg" ]
        then
          echo "${BOLD}${RED}Commit message is empty${RESET}"
          commitmsg="Add files via upload"
        fi

        printf "\n"
        git add .
        git commit -m "$commitmsg"
        break;;

      [Nn]* ) return 0;;
      * ) echo "Please answer yes or no.";;
    esac
  done
}

#============================================================
# git push
#============================================================
git_push() {
  while true; do
    printf "\n"
    read -p "${BOLD}${GREEN}git push? (Y/n) ${RESET}" yn
    case ${yn} in
      [Yy]* ) git push; break;;
      [Nn]* ) return 0;;
      * ) echo "Please answer yes or no.";;
    esac
  done
}

#============================================================
# main
#============================================================
main() {
  run_gulpfile
  firebase_deploy
  git_commit
  git_push
}

main
