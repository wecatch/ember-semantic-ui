source=
target=
cd $source
yarn gh-pages
node readme_to_html.js
cp -r dist docs $target/.
mv index.html $target/.
cd $target
mv dist demo