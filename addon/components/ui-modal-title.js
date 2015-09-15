import Ember from 'ember';

export default Ember.Component.extend({
	tagName: 'div',
	classNames: ['header'],
	classNameBindings: ['_uiClass', 'theme'],
	_uiClass: 'ui',
});
