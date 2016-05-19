import Ember from 'ember';

export default Ember.Controller.extend({
    value: 0,
    actions: {
        plus(){
            this.set('value', this.value+5);
        },
        minus(){
            this.set('value', this.value-5);
        }
    }
});