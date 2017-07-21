let tmp = null;

try {
  tmp = require('analytics.js'); // eslint-disable-line import/no-extraneous-dependencies, import/no-unresolved, global-require, max-len
  console.log('analytics.js', tmp);
} catch (e1) {
  try {
    // FIXME: Biggest question here is if this is right and good enough. Probably not!
    tmp = require('@segment/analytics.js-integration'); // eslint-disable-line import/no-extraneous-dependencies, import/no-unresolved, global-require, max-len
    console.log('@segment/analytics.js-integration', tmp);
  } catch (e2) {
    /* eslint-disable no-console */
    console.error(`
We could not find either Segment's analytics.js package or Segment's @segment/analytics.js-integration package.

You need to add a Segment analytics package or integrations to your project. You can do this in onw of two ways:

1. Install the complete set of Segment integrations:
npm install --save analytics.js

2. Install the integrations you need from here:
https://github.com/segment-integrations
`);
    /* eslint-enable no-console */
  }
}

const analytics = tmp;

export { analytics }; // eslint-disable-line import/prefer-default-export
