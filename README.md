# Ember-semantic-ui

This Ember addon support many UI components based on [semantic-ui](http://semantic-ui.com), Anyone can use this addon in their Ember project. 


[Demo](http://wecatch.me/ember-semantic-ui/demo/)


## Components

- ui-message
- ui-button
- ui-labeled-button
- ui-left-labeled-button
- ui-label
- ui-pointing-label
- ui-radio-group
- ui-checkbox-group
- ui-checkbox
- ui-form-input
- ui-form
- ui-input-tags
- ui-input
- ui-date-input
- ui-date-time-input
- ui-modal
- ui-modal-title
- ui-modal-content
- ui-modal-foot
- ui-pop-up
- ui-select
- ui-multi-select
- ui-dropdown-menu
- ui-panel
- ui-select
- ui-uploader
- file-input

# Getting Started

## Install

In your ember-cli project, install this addon from npm 

```
ember install ember-semantic-ui
```

or install the latest version from github

```
npm install git+https://github.com/wecatch/ember-semantic-ui --save-dev
```

## Dummy app

```
git clone https://github.com/wecatch/ember-semantic-ui
npm install
bower install
ember server
```

## Use this addon in your ember application


1.Put semantic ui dependency in your ember-cli project public/assets like this

```
├── semantic.css
├── semantic.js
├── semantic.min.css
├── semantic.min.js
└── themes
```

2.Modify app/index.html and import semanti-ui js file and css file


```
<link rel="stylesheet" href="assets/semantic.min.css">
<script src="assets/semantic.min.js"></script>
```


3.Start ember app 


```
ember server 
```


4.Then you can use this addon components in your ember app 


```
{{ui-input}}
```


# Thanks 

The [ember-uploader](https://github.com/benefitcloud/ember-uploader) project support this addon file-uploader. Thanks to their [author](https://github.com/benefitcloud)

# Release notes

## 0.0.8

- added ui-pop-up, ui-date-input, ui-date-time-input
- fix many bugs
- rework some component according to [component-best-practices](https://poteto.github.io/component-best-practices/)


## 0.0.7 

- remove ui-remote-select, ui-link, ui-dropdown
- added ui-label, ui-labeled-button, ui-animated-button, ui-dropdown-menu, ui-left-labeled-button, ui-pointing-label
- redesign ui-select, ui-multi-select, ui-checkbox-group, ui-radio-group
- ui-alter renamed to ui-message


**Tip**

0.0.7 is not backward compatible, be careful to update


## 0.0.5 

**2015-12-09**

- ui-uploader,ui-checkbox,file-object fix some bugs 

## 0.0.3 

**2015-10-21**

- add file uploader component
- ui-input, ui-select, ui-checkbox-group when value change, change ui render
