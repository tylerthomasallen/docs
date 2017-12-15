// analytics
'use strict';
var progress = (function() {
  // public
  function track(event) {
    utils.waitForPageLoad(function() {
      ga('send', 'event', 'track', event);
      mixpanel.track(event);
    });
  }
  return {
    track: track
  };
})();
