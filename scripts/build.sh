#!/usr/bin/env bash

rm -rf out
next build
next export
echo 'yazilimcininyolharitasi.com' > out/CNAME
touch out/.nojekyll
