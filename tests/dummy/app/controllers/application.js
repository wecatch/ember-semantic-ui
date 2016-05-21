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
            return capitalize(camelize(this.get('currentPath')));
        }
    }),
    host: Ember.computed('routeName', {
        get(){
            let host = window.location.origin+ENV.baseURL;
            let routeName = this.get('routeName');
            if(routeName === 'Index' || routeName === 'Layout'){
                return '';
            }
            
            let p =  `docs/classes/components.${routeName}.html`
            return `${host}${p}`;
        }
    })
});