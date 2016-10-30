import Ember from 'ember';

export function formatDuration(secondsQuantity) {
  if (secondsQuantity == null) { 
    return '';
  }

  return minutes(secondsQuantity) + ':' + seconds(secondsQuantity);
}

function seconds(secondsQuantity) {
  const seconds = secondsQuantity % 60;
  
  return (seconds < 10) ? '0' + seconds : seconds;
}

function minutes(secondsQuantity) {
  return Math.floor(secondsQuantity / 60);
}

export default Ember.Helper.helper(formatDuration);