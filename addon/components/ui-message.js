import Ember from 'ember';
import layout from '../templates/components/ui-message';

const {
    String: {
        classify, htmlSafe
    },
    Component,
    getWithDefault,
    warn,
    run,
    on,
    get,
    computed,
    set
} = Ember;

export default Ember.Component.extend({
    layout: layout,
    header: null,
    message: null,
    messages: null,
    close: false,
    /**
     * The root component element
     *
     * @property {Ember.String} tagName
     * @default  "button"
     */
    tagName: 'div',
    theme: '',
    timeout: 0,
    /**
     * Class names to apply to the button
     *
     * @property {Ember.Array} classNames
     */
    classNameBindings: ['_uiClass', '_theme', '_size', 'theme', '_componentClass'],
    _uiClass: 'ui',
    _componentClass: 'message',
    _theme: computed('type', {
        get() {
            const typeClass = getWithDefault(this, 'type', '');
            return `${typeClass}`;
        },
        set() {
            warn('`_type` is read only');
            return this;
        }
    }),
    _size: computed('size', {
        get() {
            const sizeClass = getWithDefault(this, 'size', '');
            return `${sizeClass}`;
        },
        set() {
            warn('`_size` is read only');
            return this;
        }
    }),
    didInitAttrs(){
        if(this.get('timeout') > 0){
            run.later(this, function() {
                this.send('closeMessage');
            }, this.get('timeout'));
        }
    },
    actions: {
        closeMessage() {
            this.$().transition('fade');
            run.next(this, () => {
                this.destroy();
            });
        }
    }
});