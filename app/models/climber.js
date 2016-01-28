import DS from 'ember-data';

const { attr } = DS;

export default DS.Model.extend({
    age: attr('number'),
    city: attr('string'),
    firstName: attr('string'),
    lastName: attr('string'),
    gender: attr('string')
});
