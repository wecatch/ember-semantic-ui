import Ember from 'ember';
import { isEmpty } from '@ember/utils';
import $ from 'jquery';
import { A } from '@ember/array';
import { computed } from '@ember/object';
import { htmlSafe } from '@ember/template';
import Component from '@ember/component';

import emberUploader from '../utils/ember-uploader';
import { fileObject } from '../utils/file-object';
import layout from '../templates/components/ui-uploader';

/**
ui-uploader component

@module components
@namespace components
@class UiUploader
@constructor
*/
export default Component.extend({
  layout: layout,
  /**
   * file request ajax setting traditional, by default true
   * @property {boolean} traditional
   *
   */
  traditional: true,
  actions: {
    /** 
        activate upload action
        @event start
        @param {Object} obj fileInput instance see {{#crossLink " fileInput"}}{{/crossLink}}
        **/
    start: function (obj) {
      let url = this.url,
        self = this;

      obj.uploader = emberUploader.create({
        url: url,
        traditional: self.get('traditional'),
      });

      obj.uploadPromise = obj.uploader.upload(obj.fileToUpload, this.params);

      self.sendAction('uploadStart', obj);
      obj.set('isUploading', computed.alias('uploader.isUploading'));

      obj.uploader.on('progress', function (e) {
        obj.set('percent', parseInt(e.percent));
        self.sendAction('uploadProgress', e);
      });

      obj.uploader.on('didUpload', function (data) {
        obj.set('isUploaded', true);
        obj.set('data', data);

        self.sendAction('uploadSuccess', obj);
      });
    },
    /** 
        deactivate upload action
        @event abort
        @param {Object} obj fileInput instance see {{#crossLink " fileInput"}}{{/crossLink}}
        **/
    abort: function (obj) {
      this.sendAction('uploadAbort', obj);
      if (obj.uploader) {
        try {
          obj.uploader.abort();
        } catch (e) {
          Ember.Logger.error(e);
        } finally {
          this.queue.removeObject(obj);
        }
      } else {
        this.queue.removeObject(obj);
      }
    },
    /** 
        delete file from queue
        @event 
        @param {Object} obj fileInput instance see {{#crossLink " fileInput"}}{{/crossLink}}
        **/
    deleteFile: function (obj) {
      this.queue.removeObject(obj);
      this.sendAction('deleteFile', obj);
    },
  },
  /**
   * The upload url
   *
   * @property url
   * @type String
   * @default  ""
   */
  url: '',

  /**
   * The root component element
   *
   * @property tagName
   * @type String
   * @default  "div"
   */
  tagName: 'div',

  /**
   * A array contain class names apply to root element
   *
   * @property classNames
   * @type Array
   * @default  ['ui', 'segment']
   */
  classNames: ['ui', 'segment'],

  /**
   * To allow  file autoUpload
   *
   * @property autoUpload
   * @type boolean
   * @default  true
   */
  autoUpload: true,

  /**
   * upload file queue
   *
   * @property queue
   * @type Array
   * @default  []
   */
  queue: null,

  /**
   * upload multiple file
   *
   * @property  multiple
   * @type boolean
   * @default  false
   */
  multiple: false,

  /**
   * extra params
   *
   * @property params
   * @type params
   * @default  null
   */
  params: null,

  /**
   * file accept
   *
   * @property accept
   * @type String
   * @default  null
   */
  accept: 'audio/*,video/*,image/*',

  /**
   * @method didInsertElement
   * @observes "didInsertElement" event
   * @returns  {void}
   */
  didInsertElement() {
    this._super(...arguments);
    let self = this;
    this.$('input').change(function (e) {
      let input = e.target;
      if (!isEmpty(input.files)) {
        for (let i = input.files.length - 1; i >= 0; i--) {
          let obj = fileObject.create({
            fileToUpload: input.files[i],
          });
          self.queue.pushObject(obj);
          if (self.autoUpload) {
            self.send('start', obj);
          }
        }

        //$(this).after($(this).clone().val(""));
        //empty input files
        $(this).val('');
      }
    });
  },
  /**
   * @function willDestroy empty queue
   *
   * @returns  null
   */
  willDestroy() {
    this._super();
    this.queue.clear(); //clear input file
  },

  /**
   * @function willDestroy empty queue
   *
   * @returns  null
   */
  init() {
    this._super(...arguments);
    if (this.queue === null) {
      this.set('queue', A());
    }
  },
  /**
   * @function inputStyle
   *
   * @returns  {string}
   */
  inputStyle: computed({
    get() {
      let style_array = [
        'opacity: 0',
        'width:100% !important',
        'overflow:hidden',
        'position:relative',
        'left:-100%',
        'display:block',
      ];
      return htmlSafe(style_array.join(';'));
    },
  }),
  /**
   * @function labelStyle
   *
   * @returns  {string}
   */
  labelStyle: computed({
    get() {
      let style_array = [
        'height: 6.25em',
        'line-height: 5.25em',
        'text-align: center',
      ];
      return htmlSafe(style_array.join(';'));
    },
  }),
});
