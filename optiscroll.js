// Custom Event Polyfill for IE
// see: https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent#Polyfill
(function () {

  if( window.CustomEvent !== 'function' )
  {

    function CustomEvent ( event, params ) {
        params = params || { bubbles: false, cancelable: false, detail: undefined };
        var evt = document.createEvent( 'CustomEvent' );
        evt.initCustomEvent( event, params.bubbles, params.cancelable, params.detail );
        return evt;
    }

    CustomEvent.prototype = window.Event.prototype;
    window.CustomEvent = CustomEvent;
  }
})();

// Optimized Scroll Event Listener with full browser support (IE 9+, Safari, Chrome, Firefox)
// By Ian Svoboda (@iansvo)
// Based on example here: https://developer.mozilla.org/en-US/docs/Web/Events/scroll#Example
(function(){

    var throttle = function(type, name, obj)
    {
        var obj = obj || window;
        var running = false;
        var func = function() 
        {
            if(running) return;

            running = true;

            requestAnimationFrame(function() 
            {
                obj.dispatchEvent(new CustomEvent(name));
                running = false;
            });

        };

        obj.addEventListener(type, func);
    };

    /* init - you can init any event */
    throttle("scroll", "optiscroll");

})();

// Example Event listener with anonymous callback function

window.addEventListener('optiscroll', function() {
  console.log('scroll listener firing');
});
