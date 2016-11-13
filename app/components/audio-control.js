import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'span',
  classNames: ['play'],

  actions: {
    play: function() {
      this.sendAction('play');
    },

    pause: function() {
      this.sendAction('pause');
    },
  }
});