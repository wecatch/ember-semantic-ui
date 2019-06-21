layout: index
title: Getting started
---


In your ember-cli project, install this addon from npm 

```bash
ember install ember-semantic-ui
```

or install the latest version from github

```bash
npm install git+https://github.com/wecatch/ember-semantic-ui --save-dev
```

### Use this addon in your ember application


Modify app/index.html and import semanti-ui js file and css file


```html
<link rel="stylesheet" href="assets/semantic.min.css">
<script src="assets/semantic.min.js"></script>
```

Start ember app 


```bash
ember server 
```


Then you can use this addon components in your ember app 


```html
{{ui-input}}
```
