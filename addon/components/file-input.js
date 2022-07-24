/* eslint-disable ember/no-jquery */
/* eslint-disable ember/no-new-mixins */
import { A } from '@ember/array';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

import Component from '@glimmer/component';
import EmberUploader from '../utils/ember-uploader';
import { FileObject } from '../utils/file-object';

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
   * ember uploader instance see {{#crossLink "utils.EmberUploader"}}{{/crossLink}}
   *
   * @property {Object} uploader
   *
   */
  uploader = null;

  /**
   * the upload file is finished
   *
   * @property {Boolean} isUploaded
   * @default false
   *
   */
  @tracked isUploaded = false;

  /**
   * this input file that is uploaded
   */
  fileObject = null;

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
  }

  @action
  fileChange(e) {
    let input = e.target;
    this.filesDidChange(input.files);
  }

  filesDidChange(files) {
    if (this.multiple) {
      this.start(files);
    } else if (files.length > 0) {
      this.fileObject = new FileObject({ fileToUpload: files[0] });
      if (this.autoUpload) {
        this.start();
      }
    }
  }

  clearInputFile() {
    this.element.querySelector('input[type="file"]').value = '';
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
    if (files) {
      let fa = A({ content: files });
      uploader.upload(files, extra);
      if (this.args.uploadStart) {
        this.args.uploadStart(fa);
      }
      uploader.on('didUpload', (data) => {
        this.isUploaded = true;
        //empty input file
        this.clearInputFile();
        if (this.args.uploadSuccess) {
          this.args.uploadSuccess(fa, data);
        }
      });
    } else if (fileObject) {
      uploader.upload(fileObject.fileToUpload, extra);
      if (this.args.uploadStart) {
        this.args.uploadStart(fileObject);
      }

      //didupload event
      uploader.on('didUpload', (data) => {
        this.isUploaded = true;
        //empty input file TODO
        this.clearInputFile();
        if (this.args.uploadSuccess) {
          this.args.uploadSuccess(fileObject, data);
        }
      });
    }

    //progress event
    uploader.on('progress', (e) => {
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
    this.clearInputFile();
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
