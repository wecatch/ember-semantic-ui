import Ember from 'ember';
import { province_object } from '../utils/province';

export function provinceName(pid) {
  return province_object[pid] ? province_object[pid].name : '';
}

export default Ember.Helper.helper(provinceName);
