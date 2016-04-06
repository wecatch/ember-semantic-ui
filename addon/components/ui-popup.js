import Ember from 'ember';
import layout from '../templates/components/ui-popup';

const {computed, copy} = Ember;

export default Ember.Component.extend({
  layout,
  classNameBindings: ['_class'],
  class: 'ui button',
  _class: computed('class', {
    get(){
      if(this.attrs.class){
        return ''
      }else {
        return this.class;
      }
    }
  }),
  /**
   * If a selector or jQuery object is specified this allows the popup to be positioned relative to that element.
   *
   * @property {Ember.String} target
   * @default  ""
   */
  target: '',
  content: '',
  html: '',
  title: '',
  variation: '',
  /**
   * Event used to trigger popup: focus, click, hover, or manual
   *
   * @property {Ember.String} event
   * @default  "click"
   */
  event: 'hover',
  position: 'top left',
  inline: false,
  transition: 'slide down',
  /**
   * Whether popup should not close on hover (useful for popup navigation menus)
   *
   * @property {Ember.Boolean} hoverable
   * @default  false
   */
  hoverable: false,
  /**
   * When using on: 'click' specifies whether clicking the page should close the popup
   *
   * @property {Ember.Boolean} closable
   * @default  true
   */
  closable: true,
  /**
   * Duration of animation events
   *
   * @property {Ember.Number} duration
   * @default  200
   */
  duration: 200,
  delayShow: 50,
  delayHide: 30, 
  preserve: false,
  didUpdateAttrs(){
      if(this.popup || this.title || this.content || this.html){
        this.bindPopEvent();
      }
  },
  didInitAttrs(){
      if(this.popup || this.title || this.content || this.html){
        this.bindPopEvent();
      }
  },
  didInsertElement(){
      if(this.title || this.content || this.html){
          this.bindPopEvent();
      }
  },
  bindPopEvent(){
      let self = this;
      let hoverable = copy(this.hoverable);
      let closable = copy(this.closable);
      let preserve = copy(this.preserve);
      let inline = copy(this.inline);

      this.$() && this.$().popup({
          popup: self.popup && Ember.$('#'+self.popup) || false,
          on: self.event,
          inline: inline,
          hoverable: hoverable,
          closable: closable,
          target: self.target || false,
          title: self.title,
          variation: self.variation,
          html: self.html,
          content: self.content,
          duration: self.duration,
          position: self.position,
          delay: {
            show: self.delayShow,
            hide: self.delayHide
          },
          preserve: preserve,
          onCreate: function(){
              if(typeof self.attrs.onCreate == 'function'){
                  self.attrs.onCreate(self);
              }
          },
          onRemove: function(){
              if(typeof self.attrs.onRemove == 'function'){
                  self.attrs.onRemove(self);
              }
          },
          onShow: function(){
              if(typeof self.attrs.onShow == 'function'){
                  self.attrs.onShow(self);
              }
          },
          onVisible: function(){
              if(typeof self.attrs.onVisible == 'function'){
                  self.attrs.onVisible(self);
              }
          },
          onHide: function(){
              if(typeof self.attrs.onHide == 'function'){
                  self.attrs.onHide(self);
              }
          }
      });
  },
  hide(){
    this.$().popup('hide');
  },
  show(){
    this.$().popup('show');
  }
});
