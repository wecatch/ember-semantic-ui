import Ember from 'ember';
import layout from '../templates/components/ui-animated-button';
import uiButtonBase from '../mixins/ui-button-base';

/** 
extend see {{#crossLink " ui-button-base"}}{{/crossLink}}
@public
@extends ui-button-base
@class ui-animated-button
**/
export default Ember.Component.extend(uiButtonBase, {
  layout: layout,
  tagName: 'div',
  _theme: 'animated',
  hidden: 'hidden content',
  visible: 'visible content'
});
