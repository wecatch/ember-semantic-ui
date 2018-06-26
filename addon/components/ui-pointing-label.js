import Component from '@ember/component';
import { computed } from '@ember/object';
import layout from '../templates/components/ui-pointing-label';
import uiLabelBase from '../mixins/ui-label-base';


/**

ui-pointing-label component see {{#crossLink "mixins.uiLabelBase"}}{{/crossLink}}


@module components
@namespace components
@class UiPointingLabel
@constructor
*/
export default Component.extend(uiLabelBase, {
    layout: layout,
    /**
     * pointing direction: below, left, right
     *
     * @property {String} direction
     */
    direction: '',
    _theme: computed('direction', function() {
        let direction = ['pointing'];
        if(this.direction === 'below'){
            direction.push(this.direction);
        }

        if(this.direction === 'left' || this.direction === 'right'){
            direction.push(this.direction);
            direction = direction.reverse();
        }

        return direction.join(' ');
    })
});