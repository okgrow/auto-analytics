/* globals jest describe test expect */

import analytics from '../../examples/react-router/imports/analytics.min';
import { initAnalytics, trackPageWhenReady, trackEventWhenReady, identifyWhenReady } from '../index';

// Params to pass to initialize initAnalytics
const validSettings = { // eslint-disable-line
  analytics,
  integrations: {
    'Google Analytics': { 'trackingId': 'UA-58359748-3' }, // eslint-disable-line quote-props
    'Mixpanel': { 'token': 'b513b13a2e253576934b47d2a195ae29', 'people': true }, // eslint-disable-line quote-props
  },
  options: {
    // Segment options for initialize() from analytics.js-core
  },
  autorun: true,
};

// Some very basic "smoke test" stuff...
describe('@okgrow/auto-analytics correctly exposes', () => {
  test('trackEventWhenReady is a function', () => {
    expect(trackEventWhenReady).toBeDefined();
  });
  test('trackPageWhenReady is a function', () => {
    expect(trackPageWhenReady).toBeDefined();
  });
  test('identifyWhenReady is a function', () => {
    expect(identifyWhenReady).toBeDefined();
  });

  test('default export is a function', () => {
    expect(initAnalytics).toBeDefined();
  });
});

// Testing our error reporting on startup
describe('initAnalytics() Throws Errors on corrupt params', () => {
  // Mock functions that are expected to exist on the analytics object.
  const page = jest.fn();
  const ready = jest.fn();
  const track = jest.fn();
  const identify = jest.fn();

  // NOTE: Only unhandled edge case is if a user is to pass null.
  // As a TypeError will be thrown due to destructuring.
  test('Throws error when no params passed', () => {
    const init = () => initAnalytics();
    expect(init).toThrowError('Analytics is not logging! You must initialize analytics with the correct params.');
  });

  test('Throws when analytics is missing', () => {
    const init = () => initAnalytics({});
    expect(init).toThrowError('Analytics is not logging! You must initialize analytics with the correct params.');
  });

  test('Throws when integrations is missing', () => {
    const init = () => initAnalytics({ analytics });
    expect(init).toThrowError('Analytics is not logging! You must initialize analytics with the correct params.');
  });

  test('Throws when analytics is missing all core functions', () => {
    const missingAll = () => initAnalytics({ analytics: {}, integrations: {} });
    expect(missingAll).toThrowError('Analytics is not logging! Expected analytics to contain ready ,track ,page ,identify , function(s).');
  });

  test('Throws when analytics is missing ready()', () => {
    const missingReady = () => initAnalytics({ analytics: { track, page, identify }, integrations: {} });
    expect(missingReady).toThrowError('Analytics is not logging! Expected analytics to contain ready , function(s).');
  });

  test('Throws when analytics is missing track()', () => {
    const missingTrack = () => initAnalytics({ analytics: { ready, page, identify }, integrations: {} });
    expect(missingTrack).toThrowError('Analytics is not logging! Expected analytics to contain track , function(s).');
  });

  test('Throws when analytics is missing page()', () => {
    const missingPage = () => initAnalytics({ analytics: { ready, track, identify }, integrations: {} });
    expect(missingPage).toThrowError('Analytics is not logging! Expected analytics to contain page , function(s).');
  });

  test('Throws when analytics is missing identify()', () => {
    const missingIdentify = () => initAnalytics({ analytics: { ready, track, page }, integrations: {} });
    expect(missingIdentify).toThrowError('Analytics is not logging! Expected analytics to contain identify , function(s).');
  });
});

// TODO: Create some tests by using the history API: https://developer.mozilla.org/en-US/docs/Web/API/History_API
//       But how to validate stuff executed? Possibly: https://segment.com/docs/sources/website/analytics.js/#emitter
