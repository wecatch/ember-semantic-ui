import layout from '../templates/components/ui-column';
import Component from '@ember/component';
import { computed } from '@ember/object'

const n = {
    '1': 'one',
    '2': 'two',
    '3': 'three',
    '4': 'four',
    '5': 'five',
    '6': 'six',
    '7': 'seven',
    '8':'eight',
    '9':'nine',
    '10':'ten',
    '11':'eleven',
    '12':'twelve', 
    '13':'thirteen', 
    '14':'fourteen', 
    '15':'fifteen',
    '16':'sixteen'
};

export default Component.extend({
    layout,
    _wide: computed('wide', {
        get(){
            let wide = n[String(this.get('wide'))];
            if (!wide){
                return '';
            }else {
                return wide+' wide';
            }
        }
    }),
    classNameBindings: ['_wide', '_componentClass'],
    _componentClass: 'column',
});
