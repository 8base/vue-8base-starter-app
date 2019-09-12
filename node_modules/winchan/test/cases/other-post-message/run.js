$(document).ready(function(){
  asyncTest("handles when there is a different postMessage being called (a chrome extension, for example)", function() {
    var argString = (new Date()).toString();
    WinChan.open({
      url: "cases/other-post-message/child.html",
      relay_url: "/relay.html",
      window_features: "width=700,height=375",
      params: argString
    }, function(err, resp) {
      equal(err.message, 'Unexpected token s in JSON at position 0');
      start();
    });
  });
});
