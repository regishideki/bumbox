import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'footer',
  classNames: ['now-playing'],

  player: Ember.inject.service(),

  song: Ember.computed.readOnly('player.song'),
  currentTime: Ember.computed.alias('player.currentTime'),
});