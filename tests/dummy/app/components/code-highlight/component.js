/*global hljs*/
import Ember from 'ember';

const {
    computed,
    Handlebars: {
        Utils
    },
    String: {
        htmlSafe
    }
} = Ember;

hljs.configure({useBR: true, tabReplace:'    '});

export default Ember.Component.extend({
    tagName: 'pre',
    // classNameBindings:['lang'],
    lang: 'handlebars',
    didInsertElement(){
        this._super(...arguments);
        hljs.highlightBlock(this.$('code')[0]);
        // hljs.initHighlightingOnLoad();
    },
    codeBlock: computed('code', {
        get(){
            let code = Utils.escapeExpression(this.attrs.code);
            return htmlSafe(hljs.fixMarkup(code));
        }
    })
});