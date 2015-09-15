import Ember from 'ember';
import { area_object } from '../utils/area';

export function areaName(aid/*, hash*/) {
  return area_object[aid] ? area_object[aid].name : '';
}

export default Ember.Helper.helper(areaName);
