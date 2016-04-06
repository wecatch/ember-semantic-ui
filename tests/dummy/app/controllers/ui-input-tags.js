import Ember from 'ember';

export default Ember.Controller.extend({
    value: Ember.A(['google']),
    valueShow: Ember.computed('value.[]', {
        get() {
            return this.value.join(',');
        }
    }),
    value1Show: Ember.computed('value1.[]', {
        get() {
            return this.value1 && this.value1.join(',');
        }
    }),
    value2Show: Ember.computed('value2.[]', {
        get() {
            return this.value2 && this.value2.join(',');
        }
    }),
    actions: {
        changeValue2(){
            this.set('value2', Ember.A(['google']));
            Ember.run.later(this, function (argument) {
                this.get('value2').addObject('apple');
            }, 1000);
        },
    }
});