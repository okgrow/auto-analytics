import analytics from '../vendor/analytics.min';

//
// analytics.js may not have loaded it's integrations by the time we start
// tracking events, page views and identifies. So we can use these *WhenReady()
// functions to defer the action until all the intgrations are ready.
//
// TODO: Consider whether to export something like this, maybe provide our own
//       API instead of just using analytics.js API.
//

const trackEventWhenReady = (...args) =>
  analytics.ready(() => analytics.track.apply(this, args));

const trackPageWhenReady = (...args) =>
  analytics.ready(() => analytics.page.apply(this, args));

const identifyWhenReady = (...args) =>
  analytics.ready(() => analytics.identify.apply(this, args));

export { trackEventWhenReady, trackPageWhenReady, identifyWhenReady };
