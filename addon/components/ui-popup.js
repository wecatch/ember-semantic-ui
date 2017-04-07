import Ember from 'ember';
import layout from '../templates/components/ui-popup';

const {computed, copy} = Ember;

/**

ui-popup component

@module components
@namespace components
@class UiPopup
@constructor
*/
export default Ember.Component.extend({
  layout,
  classNameBindings: ['_class'],
  class: 'ui button',
  _class: computed('class', {
    get(){
      if(this.attrs.class){
        return '';
      }else {
        return this.get('class');
      }
    }
  }),
  /**
   * If a selector or jQuery object is specified this allows the popup to be positioned relative to that element.
   *
   * @property {String} target
   * @default  ""
   */
  target: '',
  /**
  the pop content
  @property {String} content
  */
  content: '',
  /**
  the pop html content
  @property {String} html
  */
  html: '',
  /**
  the pop title
  @property {String} title
  */
  title: '',
  variation: '',
  /**
   * Event used to trigger popup: focus, click, hover, or manual, by default hover
   *
   * @property {String} event
   * @default  "hover"
   */
  event: 'hover',
  position: 'top left',
  inline: false,
  transition: 'slide down',
  /**
   * Whether popup should not close on hover (useful for popup navigation menus), by default false
   *
   * @property {Boolean} hoverable
   * @default  false
   */
  hoverable: false,
  /**
   * When using on: 'click' specifies whether clicking the page should close the popup, by default true
   *
   * @property {Boolean} closable
   * @default  true
   */
  closable: true,
  /**
   * Duration of animation events, by default 200
   *
   * @property {Number} duration
   * @default  200
   */
  duration: 200,
  delayShow: 50,
  delayHide: 30, 
  preserve: false,
  lastResort: false,
  didUpdateAttrs(){
      if(this.popup || this.title || this.content || this.html){
        this.bindPopEvent();
      }
  },
  init(){
      this._super(...arguments);
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

      if(!this.$()) {return;}
      this.$().popup({
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
          lastResort: self.lastResort,
          delay: {
            show: self.delayShow,
            hide: self.delayHide
          },
          preserve: preserve,
          onCreate: function(){
              if(typeof self.attrs.onCreate === 'function'){
                  self.attrs.onCreate(self);
              }
          },
          onRemove: function(){
              if(typeof self.attrs.onRemove === 'function'){
                  self.attrs.onRemove(self);
              }
          },
          onShow: function(){
              if(typeof self.attrs.onShow === 'function'){
                  self.attrs.onShow(self);
              }
          },
          onVisible: function(){
              if(typeof self.attrs.onVisible === 'function'){
                  self.attrs.onVisible(self);
              }
          },
          onHide: function(){
              if(typeof self.attrs.onHide === 'function'){
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
