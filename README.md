# Internationalization API Demo

Using the Internationalization API in JavaScript.

## TL;DR Summary

Unless browser support is not a concern, it is difficult to justify using these functions as of June 2020.

For all-round support, you would need to polyfill the missing features, resulting in more code, more work and more importantly, more maintenance. Also, if you're using TypeScript, the type definitions are still catching up, meaning you'd have to create your own temporary d.ts definitions (what this repo ended up doing).

Libraries such as moment.js for this functionality still reign supreme due to their out-of-the-box rapid development nature.
