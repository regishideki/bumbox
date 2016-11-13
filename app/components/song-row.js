import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'tr',

  classNameBindings: ['isCurrentSong'],

  player: Ember.inject.service(),

  song: null,

  isPlaying: Ember.computed('isCurrentSong', 'player.isPlaying', function() {
    return this.get('isCurrentSong') && this.get('player.isPlaying');
  }),


  isCurrentSong: Ember.computed('song', 'player.song', function() {
    return this.get('song') === this.get('player.song');
  }),


  actions: {
    play: function() {
      this.get('player').play(this.get('song'));
    },

    pause: function() {
      this.get('player').pause();
    },
  }
});
