import DS from 'ember-data';
import Ember from 'ember';

const { attr } = DS;

export default DS.Model.extend({
  age: attr('number'),
  city: attr('string'),
  state: attr('string'),
  firstName: attr('string'),
  lastName: attr('string'),
  gender: attr('string'),
  yearsclimbing: attr('number'),
  instagram: attr('string'),
  usciziten: attr('string'),
  homegym: attr('string'),
  homecrag: attr('string'),
  comprecord: attr('string'),
  interests: attr('string'),
  hometown: attr('string'),

  fullName: Ember.computed('firstName', 'lastName', function () {
    return `${this.get('firstName')} ${this.get('lastName')}`;
  })
});
