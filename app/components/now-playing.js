import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'footer',
  classNames: ['now-playing'],

  player: Ember.inject.service(),

  song: Ember.computed.readOnly('player.song'),
  currentTime: Ember.computed.alias('player.currentTime'),
  showCurrentTime: true,

  remainingTime: Ember.computed('player.currentTime', 'song', 'song.duration', function() {
    return Math.floor(this.get('song.duration') - this.get('player.currentTime'));
  }),

  actions: {
    resume: function() {
      this.get('player').resume();
    },

    pause: function() {
      this.get('player').pause();
    },

    toogleTimeDisplay: function() {
      this.toggleProperty('showCurrentTime');
    },
  }
});