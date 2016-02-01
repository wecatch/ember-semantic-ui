import Ember from 'ember';

export default Ember.Mixin.create({
    classNameBindings: ['_uiClass', 'theme', '_theme', '_componentClass'],
    _uiClass: 'ui',
    _componentClass: 'segment',
    _theme: ''    
});
