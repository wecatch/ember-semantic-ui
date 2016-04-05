import Ember from 'ember';
import layout from '../templates/components/ui-popup';

export default Ember.Component.extend({
  layout,
  classNameBindings: ['_ui', 'class', '_componentClass', 'position', 'transition'],
  attributeBindings: ['dataContent', 'dataHtml', 'dataTitle'],
  class: '',
  target: '',
  dataContent: '',
  dataHtml: '',
  dataTitle: '',
  event: 'click',
  didUpdateAttrs(){
    if(this.target){
        let self = this;
        this.$().popup({
            popup: Ember.$('#'+self.target),
            event: self.event,
            onCreate: function(){
                if(typeof self.attrs.onCreate == 'function'){
                    self.attrs.onCreate();
                }
            },
            onRemove: function(){
                if(typeof self.attrs.onRemove == 'function'){
                    self.attrs.onRemove();
                }
            },
            onShow: function(){
                if(typeof self.attrs.onShow == 'function'){
                    self.attrs.onShow();
                }
            },
            onVisible: function(){
                if(typeof self.attrs.onVisible == 'function'){
                    self.attrs.onVisible();
                }
            },
            onHide: function(){
                if(typeof self.attrs.onHide == 'function'){
                    self.attrs.onHide();
                }
            }
        });
    }
  }
});
