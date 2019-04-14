# Live coding

## Concurrent mode

Enable concurrent mode in `index.js`

## Code splitting

Use with React.lazy and Suspense in App.js for routes.

> Show chunks in Chrome Devtools before/after.

## Assets loading with Suspense

1. `GameCharacters.js`
   > In Chrome Devtools, increase latency to show images that pop up in different timeline.

## Data loading with Suspense

1. `GameCharacters.js`
   > In Chrome Devtools, increase latency to show that Suspense fallback to the loader if it's longuer than `maxDuration`props
   > Now data is cached
2. `GameList.js`
   > Suspense handler in Home.js
