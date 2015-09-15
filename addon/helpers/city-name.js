import Ember from 'ember';
import  { city_object } from '../utils/city';

export function cityName(cid/*, hash*/) {
  return city_object[cid] ? city_object[cid].name : '';
}

export default Ember.Helper.helper(cityName);
