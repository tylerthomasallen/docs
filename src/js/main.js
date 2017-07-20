// no globals and run on load
(function() {
  'use strict';
  // router
  var router = (function() {
    // listeners
    window.addEventListener('hashchange', function(event) {
      // handle hash change
      route(event.target.location.hash);
    }, false);
    // methods
    function load() {
      route(window.location.hash);
    }
    function route(hash) {
      // TODO: pubsub
    }
    // public
    return {
      load: load,
      route: route
    };
  })();

  // pub sub
  var events = (function() {
    // properties
    var events = {};
    // methods
    function publish(name, data) {
      if (events[name]) {
        events[name].forEach(function(func) {
          func(data);
        });
      }
    }
    function subscribe(name, func) {
      events[name] = events[name] || [];
      events[name].push(func);
    }
    function unsubscribe(name, func) {
      if (events[name]) {
        for (var i = 0; i < events[name].length; i++) {
          if( events[name][i] === func ) {
            events[name].splice(i, 1);
            break;
          }
        }
      }
    }
    // public
    return {
      publish: publish,
      subscribe: subscribe,
      unsubscribe: unsubscribe
    };
  })();

  // dialogs
  var dialog = (function() {
    // public
    return {
    };
  })();

  // notifications
  var notification = (function() {
    // public
    return {
    };
  })();

})();