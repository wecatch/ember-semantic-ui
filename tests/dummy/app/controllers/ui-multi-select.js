import Ember from 'ember';

export default Ember.Controller.extend({
    value: Ember.A(),
    valueShow: Ember.computed('value', function () {
        console.log(this.value.toArray());
        // return this.value.toArray();
    })
});
