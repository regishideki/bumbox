import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'tr',

  isPlaying: false,

  player: Ember.inject.service(),

  actions: {
    play: function() {
      this.get('player').play(this.get('song'));
      this.set('isPlaying', true);
    },

    pause: function() {
      this.get('player').pause();
      this.set('isPlaying', false);
    }
  }
});