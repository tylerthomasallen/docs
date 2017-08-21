// router
'use strict';
var router = (function() {
  // listener
  window.addEventListener('hashchange', function(event) {
    _route(event.target.location.hash);
  }, false);

  // private
  function _route(hash) {
    events.publish(hash);
  }

  // public
  function init() {
    _route(window.location.hash);
  }
  function add(hash, func) {
    events.subscribe(hash, func);
  }
  function remove() {
    history.pushState('', document.title, window.location.pathname + window.location.search);
  }
  return {
    add: add,
    remove: remove,
    init: init
  };
})();