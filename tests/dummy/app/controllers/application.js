import Ember from 'ember';
import ENV from 'dummy/config/environment';


const {
    String: {
        capitalize,
        camelize
    }
} = Ember;

export default Ember.Controller.extend({
    routeName: Ember.computed('currentPath', {
        get(){
            return  capitalize(camelize(this.get('currentPath')));
        }
    }),
    host: Ember.computed({
        get(){
            return window.location.host+ENV.baseURL;
        }
    })
});