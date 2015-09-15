import Ember from 'ember';

export default Ember.Component.extend({
	tagName: 'div',
	classNames: ['content'],
	classNameBindings: ['_uiClass', 'theme'],
	_uiClass: 'ui',
});
