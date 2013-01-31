// Generated by CoffeeScript 1.3.3
(function() {
  var delay, overlay;

  delay = function(ms, fn) {
    return setTimeout(fn, ms);
  };

  if (window.SUBTLEPATTERNS) {
    overlay = new SubtlePatternsBookmarklet(SUBTLEPATTERNS);
    overlay.setup({
      container: ".bookmarklet_container",
      klass: "homepage",
      "default": "Old Mathematics"
    });
    $(".bookmarklet_button a").click(function() {
      alert("Drag this button to your bookmarks bar");
      return false;
    });
  }

}).call(this);
