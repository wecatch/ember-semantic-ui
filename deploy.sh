yarn gh-pages
node readme_to_html.js
git br -D gh-pages
git checkout --orphan gh-pages
mv dist demo
mv index.html .
git add docs demo index.html
