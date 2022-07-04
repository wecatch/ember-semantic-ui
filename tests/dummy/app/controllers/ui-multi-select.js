import Controller from '@ember/controller';
import { A } from '@ember/array';
import { computed, action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';


export default class UIMultiSelectController extends Controller {
  @tracked value = A();
  get valueShow() {
    return  this.value.map(item=>item.value).join(' ');
  }

  @service options;

  @action
  onChange(value){
    this.value = value;
  }
}
