import Ember from 'ember';

let run = Ember.run;

export default Ember.Service.extend({
  isPlaying: false,

  audioElement: null,

  setupAudioElement: function() {
    var el = document.createElement('audio');
    
    this.set('audioElement', el);
  }.on('init'),

  play: function(song) {
    this.set('audioElement.src', song.get('url'));
    this.get('audioElement').play();
    this.set('isPlaying', true);
  },

  pause: function() {
    this.get('audioElement').pause();
    this.set('audioElement.src', '');
    this.set('isPlaying', false);
  },

  willDestroy: function() {
    this.pause();
  },
})