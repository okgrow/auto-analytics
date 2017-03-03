// DOCUMENTATION: http://chaijs.com/
import { assert } from 'chai';
// FUTURE: import { expect, assert } from 'chai';

// DOCUMENTATION: https://www.npmjs.com/package/mock-browser
const MockBrowser = require('mock-browser').mocks.MockBrowser;

const { describe, it } = global;

// Let's setup the global browser objects our, and the underlying analytics.js, package requires...
const mock = new MockBrowser();

global.window = mock.getWindow();
global.document = mock.getDocument();
global.location = mock.getLocation();
global.navigator = mock.getNavigator();
global.history = mock.getHistory();

// Now that's all setup, pull in the package...
const OKGAnalytics = require('../index');

// Some very basic "smoke test" stuff...
describe('okgrow-analytics imports', () => {
  it('analytics is an object', async () => {
    assert.typeOf(OKGAnalytics.analytics, 'object');
  });
  it('trackEventWhenReady is a function', async () => {
    assert.typeOf(OKGAnalytics.trackEventWhenReady, 'function');
  });
  it('trackPageWhenReady is a function', async () => {
    assert.typeOf(OKGAnalytics.trackPageWhenReady, 'function');
  });
  it('identifyWhenReady is a function', async () => {
    assert.typeOf(OKGAnalytics.identifyWhenReady, 'function');
  });
  it('default is a function', async () => {
    assert.typeOf(OKGAnalytics.default, 'function');
  });
});

// TODO: Let write more tests
