import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'footer',
  classNames: ['now-playing'],

  player: Ember.inject.service(),

  song: Ember.computed.readOnly('player.song'),
  currentTime: Ember.computed.alias('player.currentTime'),

  actions: {
    resume: function() {
      this.get('player').resume();
    },

    pause: function() {
      this.get('player').pause();
    },
  }
});