import { helper as buildHelper } from '@ember/component/helper';

export function rawContent(content) {
  return content[0].join(',');
}

export default buildHelper(rawContent);
