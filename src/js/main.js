// no globals
(function() {
  'use strict';

  // page load
  analytics.track('viewed page ' + window.location.href);
  buttons.init();
  tabs.init();
  images.init();
  modals.route();
  router.init();

  router.add('route-#dialog-code', function() {
    modals.toggle('modal-code', 'dialog');
  });

  var modalCodeIos = document.getElementById("modal-code-ios");
  var modalCodeAndroid = document.getElementById("modal-code-android");
  var modalCodeAdobe = document.getElementById("modal-code-adobe");
  var modalCodeCordova = document.getElementById("modal-code-cordova");
  var modalCodeMparticleAndroid = document.getElementById("modal-code-mparticle-android");
  var modalCodeMparticleIos = document.getElementById("modal-code-mparticle-ios");
  var modalCodeTitanium = document.getElementById("modal-code-titanium");
  var modalCodeReact = document.getElementById("modal-code-react");
  var modalCodeUnity = document.getElementById("modal-code-unity");
  var modalCodeXamarin = document.getElementById("modal-code-xamarin");
})();