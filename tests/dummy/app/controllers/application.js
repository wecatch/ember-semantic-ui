import { capitalize } from '@ember/string';
import { camelize } from '@ember/string';
import Controller from '@ember/controller';
import { computed } from '@ember/object';
import ENV from 'dummy/config/environment';


export default Controller.extend({
    routeName: computed('currentPath', {
        get(){
            return capitalize(camelize(this.get('currentPath')));
        }
    }),
    host: computed('routeName', {
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