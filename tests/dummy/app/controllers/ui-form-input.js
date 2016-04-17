import Ember from 'ember';

export default Ember.Controller.extend({
    result: Ember.A(),
    actions: {
        onchange(e){
            this.send('log',e);
        },
        onfocus(e){
            this.send('log',e);
        },
        onfocusin(e){
            this.send('log',e);
        },
        onfocusout(e){
            this.send('log',e);
        },
        log(e){
            this.result.insertAt(0, {'type': e.type, 'value': e.target.value, 'time': new Date().toTimeString()});
        }
    }
});