/* eslint-disable ember/no-jquery */
import { action } from '@ember/object';
import { htmlSafe } from '@ember/template';
import { isEmpty } from '@ember/utils';
import Component from '@glimmer/component';
import $ from 'jquery';
import { A } from '@ember/array';

import EmberUploader from '../utils/ember-uploader';
import { FileObject } from '../utils/file-object';

/**
ui-uploader component

@module components
@namespace components
@class UiUploader
@constructor
*/
export default class UiUploaderComponent extends Component {
  element = null;

  /**
   * file request ajax setting traditional, by default true
   * @property {boolean} traditional
   *
   */
  get traditional() {
    return this.args.traditional ?? true;
  }
  /**
      activate upload action
      @event start
      @param {Object} obj fileInput instance see {{#crossLink " fileInput"}}{{/crossLink}}
      **/
  @action
  start(obj) {
    let url = this.url,
      self = this;

    obj.uploader = new EmberUploader({
      url: url,
      traditional: self.get('traditional'),
    });

    obj.uploadPromise = obj.uploader.upload(obj.fileToUpload, this.params);

    if (this.args.uploadStart) {
      this.args.uploadStart(obj);
    }

    obj.set('isUploading', obj.uploader.isUploading);

    obj.uploader.on('progress', function (e) {
      obj.set('percent', parseInt(e.percent));
      if (this.args.uploadProgress) {
        this.args.uploadProgress(e);
      }
    });

    obj.uploader.on('didUpload', function (data) {
      obj.set('isUploaded', true);
      obj.set('data', data);

      if (this.args.uploadSuccess) {
        this.args.uploadSuccess(obj);
      }
    });
  }
  /**
      deactivate upload action
      @event abort
      @param {Object} obj fileInput instance see {{#crossLink " fileInput"}}{{/crossLink}}
      **/
  @action
  abort(obj) {
    if (this.args.uploadAbort) {
      this.args.uploadAbort(obj);
    }
    if (obj.uploader) {
      try {
        obj.uploader.abort();
      } catch (e) {
        console.error(e);
      } finally {
        this.queue.removeObject(obj);
      }
    } else {
      this.queue.removeObject(obj);
    }
  }
  /**
      delete file from queue
      @event
      @param {Object} obj fileInput instance see {{#crossLink " fileInput"}}{{/crossLink}}
      **/
  @action
  deleteFile(obj) {
    this.queue.removeObject(obj);
    if (this.args.deleteFile) {
      this.args.deleteFile(obj);
    }
  }

  /**
   * The upload url
   *
   * @property url
   * @type String
   * @default  ""
   */
  get url() {
    return this.args.url ?? '';
  }

  /**
   * To allow  file autoUpload
   *
   * @property autoUpload
   * @type boolean
   * @default  true
   */
  get autoUpload() {
    return this.args.autoUpload ?? true;
  }

  /**
   * upload file queue
   *
   * @property queue
   * @type Array
   * @default  []
   */
  queue = A([]);

  /**
   * upload multiple file
   *
   * @property  multiple
   * @type boolean
   * @default  false
   */
  get multiple() {
    return this.args.multiple ?? false;
  }

  /**
   * extra params
   *
   * @property params
   * @type params
   * @default  null
   */
  get params() {
    return this.args.params ?? null;
  }

  /**
   * file accept
   *
   * @property accept
   * @type String
   * @default  audio/*,video/*,image/*
   */
  get accept() {
    return this.args.accept ?? 'audio/*,video/*,image/*';
  }

  /**
   * @method register
   * @observes "register" event
   * @returns  {void}
   */
  @action
  register(element) {
    this.element = element;
    let self = this;
    $(this.element)
      .find('input')
      .on('onchange', function (e) {
        let input = e.target;
        if (!isEmpty(input.files)) {
          for (let i = input.files.length - 1; i >= 0; i--) {
            let obj = new FileObject({
              fileToUpload: input.files[i],
            });
            self.queue.pushObject(obj);
            if (self.autoUpload) {
              self.start(obj);
            }
          }
        }

        //$(this).after($(this).clone().val(""));
        //empty input files
        $(self.element).find('input').val('');
      });
  }

  /**
   * @function willDestroy empty queue
   *
   * @returns  null
   */
  willDestroy() {
    super.willDestroy(...arguments);
    this.queue.clear(); //clear input file
  }

  /**
   * @function inputStyle
   *
   * @returns  {string}
   */
  get inputStyle() {
    let style_array = [
      'opacity: 0',
      'width:100% !important',
      'overflow:hidden',
      'position:relative',
      'left:-100%',
      'display:block',
    ];
    return htmlSafe(style_array.join(';'));
  }

  /**
   * @function labelStyle
   *
   * @returns  {string}
   */
  get labelStyle() {
    let style_array = [
      'height: 6.25em',
      'line-height: 5.25em',
      'text-align: center',
    ];
    return htmlSafe(style_array.join(';'));
  }
}
