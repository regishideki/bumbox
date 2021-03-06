import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
  songs: DS.hasMany('song'),

  artwork: DS.attr('string'),
  name: DS.attr('string'),
  artist: DS.attr('string'),
  isExplicit: DS.attr('boolean'),

  songCount: Ember.computed.alias('songs.length'),

  songsDurations: Ember.computed.mapBy('songs', 'duration'),

  totalDuration: Ember.computed.sum('songsDurations'),
});