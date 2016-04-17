import Ember from 'ember';

export default Ember.Controller.extend({
    result: 0,
    actions: {
        onfocus(e){
            this.send('log',e);
        },
        log(e){
            this.set('result', this.result+1);
        }
    }
});