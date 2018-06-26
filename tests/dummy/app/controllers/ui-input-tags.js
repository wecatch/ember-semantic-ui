import Controller from '@ember/controller';
import {A} from '@ember/array';
import {computed} from '@ember/object';
import { later } from '@ember/runloop';

export default Controller.extend({
    value: A(['google']),
    valueShow: computed('value.[]', {
        get() {
            return this.value.join(',');
        }
    }),
    value1Show: computed('value1.[]', {
        get() {
            return this.value1 && this.value1.join(',');
        }
    }),
    value2Show: computed('value2.[]', {
        get() {
            return this.value2 && this.value2.join(',');
        }
    }),
    actions: {
        changeValue2(){
            this.set('value2', A(['google']));
            later(this, function () {
                this.get('value2').addObject('apple');
            }, 1000);
        },
    }
});