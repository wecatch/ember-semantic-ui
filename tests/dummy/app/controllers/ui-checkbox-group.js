import Controller from '@ember/controller';
import { A } from '@ember/array';
import { tracked } from '@glimmer/tracking';
import {action} from '@ember/object';
import { inject as service } from '@ember/service';


export default class UiCheckboxGroup extends Controller {

  @service options;

  @tracked value1;
  @tracked value2;
  @tracked value3;

  constructor() {
    super(...arguments);
    this.value1 = A();
    this.value2 = A();
    this.value3 = A();
  }

  @action
  onChange1(checked, value, valueList){
    console.log(valueList);
    this.value1 = valueList;
  }

  @action
  onChange2(checked, value, valueList){
    this.value2 = valueList;
  }

  @action
  onChange3(checked, value, valueList){
    this.value3 = valueList;
  }

  get valueShow1() {
    return this.value1.join(" ");
  }

  get valueShow2() {
    return this.value2.join(" ");
  }

  get valueShow3() {
    return this.value3.join(" ");
  }
}
