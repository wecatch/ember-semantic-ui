/* eslint-disable no-undef */
const showdown = require('showdown');
const fs = require('fs');
const data = fs.readFileSync('README.md');
const converter = new showdown.Converter();
const html = converter.makeHtml(data.toString());
const htmlBody = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="./demo/assets/vendor.css">
  <link rel="stylesheet" href="./demo/assets/semantic.min.css">
  <link rel="stylesheet" href="./assets/app.css">
  <title>Ember Semantic Ui</title>
  <style>
  </style>
</head>
<body>
<div class="m-nav">
    <div class="wrap">
        <a class="home" href="/ember-semantic-ui/">
          ember-semantic-ui
        </a>
        <ul class="nav external">
            <li>
                <a href="https://github.com/wecatch/ember-semantic-uid">Github</a>
            </li>
            <li>
                <a href="https://wecatch.me">Wecatch</a>
            </li>
        </ul>
        <ul class="nav internal">
            <li><a href="/ember-semantic-ui/docs/">Docs</a></li>
            <li><a href="/ember-semantic-ui/demo/">Demo</a></li>
        </ul>
    </div>
</div>
<div class="container" >
  ${html}
</div>
<script src="./assets/highlight.min.js"></script>
<script>hljs.highlightAll();</script>
</body>
</html>
`;

fs.writeFileSync('index.html', htmlBody);
