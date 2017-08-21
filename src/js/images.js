// images
'use strict';
var images = (function() {
  var image = document.getElementById('modal-image-img');
  var link = document.getElementById('modal-image-link')

  // wrap all <img /> with <a href="image-[src]"><img /></a> to trigger expand modal
  function init() {
    var images = document.getElementsByTagName('img');
    for (var i = 0; i < images.length; i++) {
      var image = images[i];
      if (image.parentElement.tagName !== 'A') {
        var wrapper = document.createElement('a');
        var src = image.getAttribute('src');
        var hash = '#modal-image=' + src;
        wrapper.setAttribute('href', hash);
        image.parentNode.insertBefore(wrapper, image);
        wrapper.appendChild(image);
        _route(hash, src);
      }
    }
  }

  function _route(hash, src) {
    var route = 'route-' + hash;
    if (events.items.hasOwnProperty(route)) return;
    router.add(route, function() {
      analytics.track('viewed modal image ' + src);
      modals.toggle('modal-image', 'dialog', null, src);
      link.setAttribute('href', src);
      image.setAttribute('src', src);
    });
  }

  return {
    init: init
  };
})();