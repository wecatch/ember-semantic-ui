import Mixin from '@ember/object/mixin';

/**
ui-segment-base mixin

@module mixins
@namespace mixins
@class uiSegmentBase
@constructor
*/
export default Mixin.create({
    classNameBindings: ['_uiClass', 'theme', '_theme', '_componentClass'],
    _uiClass: 'ui',
    _componentClass: 'segment',
    _theme: ''    
});
