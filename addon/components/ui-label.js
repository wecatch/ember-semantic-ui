import layout from '../templates/components/ui-label';
import uiLabelBase from '../mixins/ui-label-base';
import Component from '@ember/component';


/**
ui-label component {{#crossLink "mixins.UiLabelBase"}}{{/crossLink}}

@module components
@namespace components
@class UiLabel
@constructor
*/
export default Component.extend(uiLabelBase, {
    layout: layout
});
