import DS from 'ember-data';

export default DS.Model.extend({
  album: DS.belongsTo('album'),

  track: DS.attr('number'),
  name: DS.attr('string'),
  duration: DS.attr('number'),
  url: DS.attr('string'),

  artist: Ember.computed.alias('album.artist'),
  artwork: Ember.computed.alias('album.artwork'),
});