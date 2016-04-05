import Ember from 'ember';

export default Ember.Controller.extend({
    value: null,
    actions: {
        clickMe(value){
            alert(value);
        }
    }
});
