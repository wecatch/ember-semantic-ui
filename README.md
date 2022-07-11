# ember-semantic-ui

[![Build Status](https://github.com/wecatch/ember-semantic-ui/actions/workflows/ci.yml/badge.svg)](https://github.com/wecatch/ember-semantic-ui/actions)
[![Downloads](https://img.shields.io/npm/dt/ember-semantic-ui.svg)](https://www.npmjs.com/package/ember-semantic-ui)
[![Version](https://img.shields.io/npm/v/ember-semantic-ui.svg)](https://www.npmjs.com/package/ember-semantic-ui)

This Ember addon support many UI components based on [semantic-ui](http://semantic-ui.com), Anyone can use this addon in their Ember project. 


[Demo](https://wecatch.me/ember-semantic-ui/demo/)
[Docs](https://wecatch.me/ember-semantic-ui/docs/)


## Components

**Layout**

- [ui-column](http://wecatch.me/ember-semantic-ui/demo/#/ui-column)

**Button**

- [ui-button](http://wecatch.me/ember-semantic-ui/demo/#/ui-button)

**Menu**

- [ui-dropdown-menu](http://wecatch.me/ember-semantic-ui/demo/#/ui-dropdown-menu)
- [ui-tab-menu](http://wecatch.me/ember-semantic-ui/demo/#/ui-tab-menu)


**Input**

- [ui-input-tags](https://wecatch.me/ember-semantic-ui/demo/#/ui-input-tags)
- [ui-input](https://wecatch.me/ember-semantic-ui/demo/#/ui-input)
- [ui-date-input](https://wecatch.me/ember-semantic-ui/demo/#/ui-date-input)
- [ui-date-time-input](https://wecatch.me/ember-semantic-ui/demo/#/ui-date-time-input)


**Checkbox**

- [ui-checkbox-group](https://wecatch.me/ember-semantic-ui/demo/#/ui-checkbox-group)
- [ui-checkbox](https://wecatch.me/ember-semantic-ui/demo/#/ui-checkbox)


**Modal**

- [ui-modal](https://wecatch.me/ember-semantic-ui/demo/#/ui-modal)

**Select**

- [ui-select](https://wecatch.me/ember-semantic-ui/demo/#/ui-select)
- [ui-multi-select](https://wecatch.me/ember-semantic-ui/demo/#/ui-multi-select)

**File**

- [ui-uploader](https://wecatch.me/ember-semantic-ui/demo/#/ui-uploader)
- [file-input](https://wecatch.me/ember-semantic-ui/demo/#/file-input)


**Popup**

- [ui-popup](https://wecatch.me/ember-semantic-ui/demo/#/ui-popup)

**Message**

- [ui-message](https://wecatch.me/ember-semantic-ui/demo/ui-message)

# Getting Started

## Dummy app

```
git clone https://github.com/wecatch/ember-semantic-ui
npm install
bower install
ember server
```

## Use this addon in your ember application

```
ember install ember-semantic-ui
```


1.Modify app/index.html and import semanti-ui js file and css file


```
<link rel="stylesheet" href="{{rootURL}}assets/semantic.min.css">
<script src="{{rootURL}}assets/semantic.min.js"></script>
```


2.Start ember app 


```
ember server 
```


3.Then you can use this addon components in your ember app 


```
<UiInput/>
```


# Thanks 

The [ember-uploader](https://github.com/benefitcloud/ember-uploader) project support this addon file-uploader. Thanks to their [author](https://github.com/benefitcloud)

# Release notes


## 1.0.0

- Upgrade ember-cli to 4.4, this version is not compatible, please take caution
- Only support glimmer component

## 0.2.3

- bump babel

## 0.2.2

- remove bower, install npm package semantic-ui-css for semantic-ui

## 0.2.1

- fix [34](https://github.com/wecatch/ember-semantic-ui/issues/34)

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

* Ember.js v3.24 or above
* Ember CLI v3.24 or above
* Node.js v12 or above
