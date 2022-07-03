import Controller from '@ember/controller';
import { A } from '@ember/array';
import { computed, action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class UIMultiSelectController extends Controller {
  @tracked value = A();
  get valueShow() {
    return  this.value.map(item=>item.value).join(' ');
  }

  options = [
    {
      name: 'Google',
      value: 'Google'
    },
    {
      name: 'Apple',
      value: 'Apple'
    },
    {
      name: 'Meta',
      value: 'Meta'
    },
  ]

  @action
  onChange(value){
    this.value = value;
  }
}
