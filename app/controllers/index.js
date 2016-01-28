import Ember from 'ember';
import computedFilterByQuery from 'ember-cli-filter-by-query';

export default Ember.Controller.extend({
  filteredClimbers: computedFilterByQuery('model', 'fullName', 'query')
});
