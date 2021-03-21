#!/bin/bash

checkpoint=$1;
control_branch='control'
branch_status=null
search_term="Checkpoint ${checkpoint}"

if test "x$control_branch" = x; then
    control_branch=`git branch -a | grep "*" | cut -d ' ' -f2`
fi

if [[ $(git diff --stat) != '' ]]; then
  branch_status='dirty'
  echo "Branch dirty. Resetting changes and creating temp branch"
  git checkout .
  echo "Cleaned git tree"  
else
  branch_status='clean'
  echo "Branch clean."
fi

temp_branch=`git branch -a | grep "temp"`
if test "y$temp_branch" = y; then
    echo "Temporal branch not set up. Creating"
    git checkout -b "temp"
else
    echo "Temporal branch already set up. Switching"
    git checkout "temp"
fi

git reset --hard

first_SHA=`git log origin/control --abbrev-commit --pretty=oneline --grep="Checkpoint 1 " | cut -d ' ' -f1`
target_SHA=`git log origin/control --abbrev-commit --pretty=oneline --grep="${search_term} " | cut -d ' ' -f1` 

echo $target_SHA

git cherry-pick -n $first_SHA^..$target_SHA