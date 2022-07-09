/* eslint-disable ember/no-jquery */
/* eslint-disable ember/no-new-mixins */
import { isEmpty } from '@ember/utils';
import Evented from '@ember/object/evented';
import { isArray, A } from '@ember/array';
import { action } from '@ember/object';
import $ from 'jquery';

import EmberUploader from '../utils/ember-uploader';
import { FileObject } from '../utils/file-object';
import Component from '@glimmer/component';

/**
file-input-base mixinx

@module components
@namespace components
@class FileInputComponent
@extends Ember.Evented
@constructor
*/
export default class FileInputComponent extends Component {
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
   * style
   * @property {String} style
   *
   */
  get style() {
    return this.args.style ?? this.style;
  }
  /**
   * ember uploader instance see {{#crossLink "utils.EmberUploader"}}{{/crossLink}}
   *
   * @property {Object} uploader
   *
   */
  uploader = null;
  /**
   * upload url
   *
   * @property {String} url
   *
   */
  get url() {
    return this.args.url ?? null;
  }
  /**
   * upload request method
   *
   * @property {String} method
   * @default 'POST'
   *
   */
  get method() {
    return this.args.method ?? 'POST';
  }
  /**
   * extra parameters for upload
   *
   * @property {Object} extra
   * @default null
   *
   */
  get extra() {
    return this.args.extra ?? null;
  }
  /**
   * the upload file parameter name
   *
   * @property {String} paramName
   * @default 'file'
   *
   */
  get paramName() {
    return this.args.paramName ?? 'file';
  }
  /**
   * the upload file is finished
   *
   * @property {Boolean} isUploaded
   * @default false
   *
   */
  isUploaded = false;
  /**
   * the upload request status
   *
   * @property {Boolean} isUploading
   * @default false
   *
   */
  get isUploading() {
    return this.uploader?.isUploading;
  }
  /**
   * allow autoUpload
   *
   * @property {Boolean} autoUpload
   * @default true
   *
   */
  get autoUpload() {
    return this.args.autoUpload ?? true;
  }

  /**
   *  multiple file or not, by default false
   *
   * @property {Boolean} multiple
   * @default false
   *
   */
  get multiple() {
    return this.args.multiple ?? false;
  }

  @action
  register(element) {
    this.element = element;
    let self = this;
    $(element)
      .find('input')
      .on('onchange', function (e) {
        let input = e.target;
        self.filesDidChange(input.files);
      });
  }

  filesDidChange(files) {
    if (isArray(files)) {
      this.start(files);
    } else if (!isEmpty(files)) {
      this.fileObject = new FileObject({ fileToUpload: files[0] });
      if (this.autoUpload) {
        this.start();
      }
    }
  }

  /**
   * start upload action
   *
   * @event start
   *
   *
   */
  @action
  start(files) {
    let { uploader, fileObject, extra } = this;
    let self = this;
    if (files) {
      let fa = A({ content: files });
      uploader.upload(files, extra);
      if (this.args.uploadStart) {
        this.args.uploadStart(fa);
      }
      uploader.on('didUpload', function (data) {
        self.isUploaded = true;
        //empty input file
        $(self.element).find('input').val('');
        if (self.args.uploadSuccess) {
          self.args.uploadSuccess(fa, data);
        }
      });
    } else if (fileObject) {
      uploader.upload(fileObject.fileToUpload, extra);
      if (this.args.uploadStart) {
        this.args.uploadStart(fileObject);
      }

      //didupload event
      uploader.on('didUpload', function (data) {
        self.isUploaded = true;
        fileObject.set('data', data);
        //empty input file TODO
        $(self.element).find('input').val('');
        if (self.args.uploadSuccess) {
          self.args.uploadSuccess(fileObject, data);
        }
      });
    }

    //progress event
    uploader.on('progress', function (e) {
      if (this.args.uploadProgress) {
        this.args.uploadProgress(e);
      }
    });
  }
  /**
   * abort upload action
   *
   * @event abort
   *
   *
   */

  @action
  abort() {
    this.uploader.abort();
    if (this.args.uploadAbort) {
      this.args.uploadAbort();
    }
    //empty input file
    $(this.element).find('input').val('');
  }

  constructor() {
    super(...arguments);
    let { url, method, paramName } = this;
    this.uploader = new EmberUploader({
      url: url,
      paramName: paramName,
      type: method,
      traditional: this.traditional,
    });
  }

  willDestroy() {
    super.willDestroy(...arguments);
    this.uploader = null;
  }
}
