import Ember from 'ember';

let run = Ember.run;

export default Ember.Service.extend({
  song: null,

  isPlaying: false,

  audioElement: null,

  currentTime: 0,

  setupAudioElement: function() {
    var el = document.createElement('audio');
    el.addEventListener('timeupdate', run.bind(this, 'timeDidUpdate'))
    
    this.set('audioElement', el);
  }.on('init'),

  play: function(song) {
    this.set('song', song);
    this.set('audioElement.src', song.get('url'));
    this.get('audioElement').play();
    this.didPlay();
  },

  pause: function() {
    this.get('audioElement').pause();
    this.didPause();
  },

  resume: function() {
    this.get('audioElement').play();
    this.didPlay();
  },

  timeDidUpdate: function() {
    this.set('currentTime', Math.floor(this.get('audioElement.currentTime')));
  },

  didPlay: function() {
    this.set('isPlaying', true);
  },

  didPause: function() {
    this.set('isPlaying', false);
  },

  willDestroy: function() {
    this.get('audioElement').pause();
    this.set('audioElement.src', '');
  },
})