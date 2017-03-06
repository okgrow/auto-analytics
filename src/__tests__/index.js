import chai from 'chai';               // DOCUMENTATION: http://chaijs.com/
import { mocks } from 'mock-browser';  // DOCUMENTATION: https://www.npmjs.com/package/mock-browser

const { describe, it } = global;

// Let's setup the global browser objects our, and the underlying analytics.js, package requires...
const mock = new mocks.MockBrowser();

global.window = mock.getWindow();
global.document = mock.getDocument();
global.location = mock.getLocation();
global.navigator = mock.getNavigator();
global.history = mock.getHistory();

// Now that's all setup, pull in the package...
const OKGAnalytics = require('../index');

const should = chai.should();

// Some very basic "smoke test" stuff...
describe('okgrow-auto-analytics imports', () => {
  it('analytics is an object', async () => {
    OKGAnalytics.analytics.should.be.a('object');
  });
  it('trackEventWhenReady is a function', async () => {
    OKGAnalytics.trackEventWhenReady.should.be.a('function');
  });
  it('trackPageWhenReady is a function', async () => {
    OKGAnalytics.trackPageWhenReady.should.be.a('function');
  });
  it('identifyWhenReady is a function', async () => {
    OKGAnalytics.identifyWhenReady.should.be.a('function');
  });
  it('default is a function', async () => {
    OKGAnalytics.default.should.be.a('function');
  });

  it('analytics is an object on window', async () => {
    // eslint-disable-next-line no-undef
    window.analytics.should.be.a('object');
  });

  it('window.history.pushState is function', async () => {
    // eslint-disable-next-line no-undef
    window.history.pushState.should.be.a('function');
  });

  it('window.onload is function', async () => {
    const settings = {
      'Google Analytics': { 'trackingId': 'UA-58359748-3' }, // eslint-disable-line quote-props
      'Mixpanel': { 'token': 'b513b13a2e253576934b47d2a195ae29', 'people': true }, // eslint-disable-line quote-props
    };

    // eslint-disable-next-line no-undef
    should.not.exist(window.onload);

    OKGAnalytics.default(settings);

    // eslint-disable-next-line no-undef
    window.onload.should.be.a('function');
  });
});

// TODO: Create some tests by using the history API: https://developer.mozilla.org/en-US/docs/Web/API/History_API
//       But how to validate stuff executed? Possibly: https://segment.com/docs/sources/website/analytics.js/#emitter
