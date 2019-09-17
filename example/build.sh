#!/usr/bin/env bash
THISDIR=$(cd $(dirname "$0"); pwd) #this script's directory
echo "current dir is: $PWD"
pushd .
cd $THISDIR
echo "current dir is now: $PWD"

# go to package dir & build package
cd ..
echo "current dir should be package dir. Is: $PWD"
yarn
yarn build
# now that package is built, return to example dir and build example
cd $THISDIR
echo "current dir should be example dir. Is: $PWD"
yarn
yarn build

# return to root/package dir
cd ..
echo "all built. current dir should be package dir. Is: $PWD"
# trigger build