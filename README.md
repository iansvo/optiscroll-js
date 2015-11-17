# optiscroll-js
Custom Optimized Scroll listener designed to "throttle" the standard window.addEventListener('scroll' ...}); and $(window).scroll(...}); listeners to insure they more properly function. 

This script is based on the MDN example below, but has been modified in a way that supports all major browsers. This is something I use often on projects and I hope someone else finds it useful as well.

##Reference

- Why you should throttle your scroll listener | [Source - MDN](https://developer.mozilla.org/en-US/docs/Web/Events/scroll#Example)
- Custom Event Polyfill for IE 9+ | [Source](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent#Polyfill)
