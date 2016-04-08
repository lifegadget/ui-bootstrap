import Ember from 'ember';
import uiLabel from 'ui-bootstrap/components/ui-label';

const pill = uiLabel.extend({
  isPill: true
});
pill[Ember.NAME_KEY] = 'ui-pill';
export default pill;
