source=
target=
cd $source
yarn gh-pages
node readme_to_html.js
cp -r dist docs $target/.
mv index.html $target/.
cd $target
mv dist demo
git branch -D gh-pages
git checkout -b gh-pages
git rm .gitignore
git add docs demo index.html
git commit -m"deploy"
git push origin gh-pages --force