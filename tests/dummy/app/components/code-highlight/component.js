/*global hljs*/
import Ember from 'ember';
import { computed } from '@ember/object';
import { htmlSafe } from '@ember/template';
import Component from '@ember/component';

const {
    Handlebars: {
        Utils
    }
} = Ember;

hljs.configure({useBR: true, tabReplace:'    '});

export default Component.extend({
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