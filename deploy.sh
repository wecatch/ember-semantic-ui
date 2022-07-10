source=/Users/zhyq0826/workspace/wecatch/ember-semantic-ui
target=/Users/zhyq0826/workspace/wecatch/ember-semantic-ui-gh-pages
rm -rf dist
rm -rf demo
rm -rf docs
cd $source
yarn gh-pages
node readme.js
cp -r dist docs $target/.
mv index.html $target/.
cd $target
mv dist demo
git add docs demo index.html
git commit -m"deploy"
git push origin gh-pages --force