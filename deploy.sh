#! /usr/bin/env sh

# abort on errors
set -e

# generate docs
npm run docs:gen prod

# build
npm run docs:build

# Copy README.md to dist

cp README.md docs/.vuepress/dist

# navigate into the build output directory
cd docs/.vuepress/dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

git push -f https://github.com/rafaelmatos20/vuepress master:gh-pages

cd -