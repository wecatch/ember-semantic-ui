# Ember-semantic-ui

[![Downloads](https://img.shields.io/npm/dt/ember-semantic-ui.svg)](https://www.npmjs.com/package/ember-semantic-ui)
[![Version](https://img.shields.io/npm/v/ember-semantic-ui.svg)](https://www.npmjs.com/package/ember-semantic-ui)

This Ember addon support many UI components based on [semantic-ui](http://semantic-ui.com), Anyone can use this addon in their Ember project. 


[Demo](http://wecatch.me/ember-semantic-ui/demo/)
[Docs](http://wecatch.me/ember-semantic-ui/docs/)



## Components

**Layout**

- [ui-container](http://wecatch.me/ember-semantic-ui/demo/#/ui-container)
- [ui-text-container](http://wecatch.github.io/ember-semantic-ui/demo/#/ui-text-container)


**Button**

- [ui-button](http://wecatch.github.io/ember-semantic-ui/demo/#/ui-button)
- [ui-labeled-button](http://wecatch.github.io/ember-semantic-ui/demo/#/ui-labeled-button)
- [ui-left-labeled-button](http://wecatch.github.io/ember-semantic-ui/demo/#/ui-left-labeled-button)

**Menu**

- [ui-dropdown-menu](http://wecatch.github.io/ember-semantic-ui/demo/#/ui-dropdown-menu)
- [ui-menu](http://wecatch.github.io/ember-semantic-ui/demo/#/ui-menu)
- [ui-vertical-menu](http://wecatch.github.io/ember-semantic-ui/demo/#/ui-vertical-menu)
- [ui-tab-menu](http://wecatch.github.io/ember-semantic-ui/demo/#/ui-tab-menu)


**Form**

- [ui-form-input](http://wecatch.github.io/ember-semantic-ui/demo/#/ui-form-input)
- [ui-form](http://wecatch.github.io/ember-semantic-ui/demo/#/ui-form)


**Input**

- [ui-input-tags](http://wecatch.github.io/ember-semantic-ui/demo/#/ui-input-tags)
- [ui-input](http://wecatch.github.io/ember-semantic-ui/demo/#/ui-input)
- [ui-date-input](http://wecatch.github.io/ember-semantic-ui/demo/#/ui-date-input)
- [ui-date-time-input](http://wecatch.github.io/ember-semantic-ui/demo/#/ui-date-time-input)


**Checkbox**

- [ui-radio-group](http://wecatch.github.io/ember-semantic-ui/demo/#/ui-radio-group)
- [ui-checkbox-group](http://wecatch.github.io/ember-semantic-ui/demo/#/ui-checkbox-group)
- [ui-checkbox](http://wecatch.github.io/ember-semantic-ui/demo/#/ui-checkbox)


**Modal**

- [ui-modal](http://wecatch.github.io/ember-semantic-ui/demo/#/ui-modal)
- [ui-modal-title](http://wecatch.github.io/ember-semantic-ui/demo/#/ui-modal-title)
- [ui-modal-content](http://wecatch.github.io/ember-semantic-ui/demo/#/ui-modal-content)
- [ui-modal-foot](http://wecatch.github.io/ember-semantic-ui/demo/#/ui-modal-foot)

**Select**

- [ui-select](http://wecatch.github.io/ember-semantic-ui/demo/#/ui-select)
- [ui-multi-select](http://wecatch.github.io/ember-semantic-ui/demo/#/ui-multi-select)
- [ui-select](http://wecatch.github.io/ember-semantic-ui/demo/#/ui-select)


**Label**

- [ui-label](http://wecatch.github.io/ember-semantic-ui/demo/#/ui-label)
- [ui-pointing-label](http://wecatch.github.io/ember-semantic-ui/demo/#/ui-pointing-label)

**File**

- [ui-uploader](http://wecatch.github.io/ember-semantic-ui/demo/#/ui-uploader)
- [file-input](http://wecatch.github.io/ember-semantic-ui/demo/#/file-input)


**Popup**

- [ui-pop-up](http://wecatch.github.io/ember-semantic-ui/demo/#/ui-pop-up)

**Message**

- [ui-message](http://wecatch.me/ember-semantic-ui/demo/ui-message)

**Panel**

- [ui-panel](http://wecatch.github.io/ember-semantic-ui/demo/#/ui-panel)

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


1.Modify app/index.html and import semanti-ui js file and css file


```
<link rel="stylesheet" href="assets/semantic.min.css">
<script src="assets/semantic.min.js"></script>
```


2.Start ember app 


```
ember server 
```


3.Then you can use this addon components in your ember app 


```
{{ui-input}}
```


# Thanks 

The [ember-uploader](https://github.com/benefitcloud/ember-uploader) project support this addon file-uploader. Thanks to their [author](https://github.com/benefitcloud)

# Release notes

## 0.2.0

- upgrade ember-cli to 3.1, support ember to latest 3.0
- upgrade semantic-ui to 2.3.2

## 0.1.2

upgrade ember-cli to 2.11, upgrade ember to latest 2.11

## 0.1.1

fix dummy app

## 0.1.0

- add docs
- file-input support multiple files upload
- add menu component
- add row, column, container component

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
