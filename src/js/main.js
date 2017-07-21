// no globals and run on load
(function() {
  'use strict';

  // router
  var router = (function() {
    // handle hash change
    window.addEventListener('hashchange', function(event) {
      route(event.target.location.hash);
    }, false);
    // methods
    function load() {
      route(window.location.hash);
    }
    function add(hash, func) {
      events.subscribe(hash, func)
    }
    function remove() {
      history.pushState("", document.title, window.location.pathname + window.location.search);
    }
    function route(hash) {
      events.publish('route-' + hash);
    }

    // public
    return {
      add: add,
      remove: remove,
      load: load
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
    // properties
    var cache = {};

    // main
    addCache()
    function addCache() {
      var dialogs = document.getElementsByClassName('dialog');
      for (var i = 0; i < dialogs.length; i++) {
        var self = this;
        var dialog = dialogs[i];
        var id = dialog.id
        var children = dialog.children;
        var background = null;
        var close = null;
        for (var j = 0; j < children.length; j++) {
          var child = children[j]
          var subchildren = child.children;
          background = (child.classList.contains('dialog-background')) ? child : background;
          for (var k = 0; k < subchildren.length; k++) {
            var subchild = subchildren[k]
            close = (subchild.classList.contains('dialog-close')) ? subchild : close;
            break;
          }
        }
        addListener(id, background, close);
        cache[id] = dialog;
      }
    }

    function addListener(id, background, close) {
      // need separate function because of closure binding within .addEventListener
      background.addEventListener('click', function(event) {
        toggle(id);
      }.bind(this), false);
      close.addEventListener('click', function(event) {
        toggle(id);
      });
    }

    function toggle(dialogId) {
      var dialog = cache[dialogId];
      if (!dialog) return;
      var isDialogOpen = dialog.classList.contains('active');
      isDialogOpen ? document.body.classList.remove('dialog') : document.body.className += ' dialog';
      isDialogOpen ? dialog.classList.remove('active') : dialog.className += ' active';
      isDialogOpen ? router.remove() : null;
    }

    // public
    return {
      toggle: toggle
    };
  })();

  // notifications
  var notification = (function() {
    // properties
    var duration = 1200;
    var cache = {};

    // main
    addCache()
    function addCache() {
      var notifications = document.getElementsByClassName('notification');
      for (var i = 0; i < notifications.length; i++) {
        var notification = notifications[i];
        var id = notification.id;
        var children = notification.children;
        var close = null;
        for (var j = 0; j < children.length; j++) {
          var child = children[j]
          var subchildren = child.children;
          for (var k = 0; k < subchildren.length; k++) {
            var subchild = subchildren[k]
            close = (subchild.classList.contains('notification-close')) ? subchild : close;
            break;
          }
        }
        addListener(id, close);
        cache[id] = notification;
      }
    }

    // methods
    function addListener(id, close) {
      close.addEventListener('click', function(event) {
        toggle(id);
      });
    }

    function toggle(notificationId) {
      console.log(notificationId, duration)
      var notification = cache[notificationId];
      if (!notification) return;
      var isNotificationOpen = notification.classList.contains('active');
      isNotificationOpen ? notification.classList.remove('active') : notification.className += ' active';
      // isNotificationOpen ? router.remove() : null;
      setTimeout(function() {
        notification.classList.remove('active');
        router.remove()
      }, duration);
    }

    // public
    return {
      toggle: toggle
    };

  })();

  // analytics
  var analytics = (function() {
    // public
    function track(event, category, action) {
      var categoryClean = category || 'none';
      var actionClean = action || 'none';
      ga('send', event, categoryClean, actionClean);
      mixpanel.track(event);
    }
    return {
      track: track
    };
  })();

  // page load
  function onload() {
    var search = document.getElementById('algolia-doc-search');
console.log(search)
    router.add('route-#header-helpful', function() {
      notification.toggle('notification-helpful');
    });
    router.add('route-#header-unhelpful', function() {
      dialog.toggle('dialog-unhelpful');
    });
    router.add('route-#header-search', function() {
      dialog.toggle('dialog-search');
      search.focus()
    });


    analytics.track('viewed page ' + window.location.href);
    router.load();
  }
  onload();
})();