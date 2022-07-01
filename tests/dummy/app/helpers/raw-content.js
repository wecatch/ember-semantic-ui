import { helper as buildHelper } from '@ember/component/helper';
import { htmlSafe } from '@ember/template';
import $ from 'jquery';

export function rawContent(content) {
  let rcontent = $.trim(content);
  return htmlSafe('<pre>' + rcontent + '</pre>');
}

export default buildHelper(rawContent);
