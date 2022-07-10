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
  <link rel="stylesheet" href="/ember-semantic-ui/demo/assets/vendor.css">
  <title>Ember Semantic Ui</title>
</head>
<body>
${html}
<script src="/ember-semantic-ui/demo/assets/vendor.js"></script>
<script>hljs.highlightAll();</script>
</body>
</html>
`;

fs.writeFileSync('index.html', htmlBody);
