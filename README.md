# Auto Analytics

[![npm version](https://badge.fury.io/js/%40okgrow%2Fauto-analytics.svg)](https://badge.fury.io/js/%40okgrow%2Fauto-analytics)

> Complete Google Analytics, Mixpanel, KISSmetrics (and more) integration for JavaScript applications.

Use one API, thanks to Segment.io's [analytics.js](https://segment.com/docs/libraries/analytics.js/), to **easily and automatically** record and send data from your JavaScript application to your analytics platforms.

**NOTE:** The `@okgrow/auto-analytics` package replaces the **now deprecated** `okgrow-auto-analytics` package.

## Table of Contents

- [Install](#install)
- [Currently Supported Analytic Services](#currently-supported-analytic-services)
- [Ad-blocker](#ad-blocker)
- [Configuration](#configuration)
	- [Page views](#page-views)
	- [Event tracking](#event-tracking)
  - [Debugging](#debugging)
  - [Example React Router Application](#example-react-router-application)
- [Maintainers](#maintainers)
- [Contributing](#contributing)
- [License](#license)

## Background

### Auto Analytics 2.0+
With version 2.X we are **removing the embedded Segment `analytics.js` module**. With version 2.0.0 and beyond you will need to build your own Segment `analytics.js` module _**manually**_.

**NOTE:** _We have **not** added the package Segment `analytics.js` as an explicit dependency_ because some developers will prefer to add only individual integrations or create a customized `analytics.js` module in order to keep the weight of the package to a minimum.

### Auto Analytics 1.0+
With the first version of this package we basically extracted code from our more Meteor-specific Atmosphere package to create a more generally usable package for the whole JavaScript community.


## Quick Start

```sh
npm install --save @okgrow/auto-analytics
```

```js
import { initAnalytics } from '@okgrow/auto-analytics';
// NOTE: You must build your own analytics.js, see Creating Segment's analytics.js for details.
import analytics from './your-custom-build/analytics.min.js';

// Add your analytics integrations and their tracking ids + config options here.
const settings = {
  analytics,
  integrations: {
    'Google Analytics': { 'trackingId': 'Your tracking ID' },
    'Mixpanel': { 'token': '...', 'people': true },
  },
  options: {
    // Segment options to be passed to initialize() from analytics.js-core
  },
  autorun: true, // Defaults to true if not provided.
};

initAnalytics(settings);
```

## Creating Segment's analytics.js

### Recommended process

1. Clone this example repo down `git clone https://github.com/okgrow/analytics.js.git`
1. `cd analytics.js`
1. `npm install && npm run build`
1. The build will output these two files: `analytics.js` and `analytics.min.js`

Too reduce the final bundle size, remove any integrations that you are not using. To do that:

1. Open up the `lib/integrations.js` file and remove all the integrations that you will not use.
1. Now re-run `npm run build`
1. Your `analytics.js` and `analytics.min.js` will only contain the integrations you are using.
1. Copy the `analytics.min.js` file to your project so that `@okgrow/auto-analytics` can use it.

### Not Recommended: Use Segment's example `analytics.js` Package
Segment's `analytics.js` package offers a large number of integrations with various analytics providers. Installing their example package will give you all of their supported integrations(very large bundle size):

```sh
npm install --save analytics.js
```

However it is recommend that you build your own `analytics.js` with only the integrations you need. You can see all possible `analytics.js-integrations` [here](https://github.com/segment-integrations?query=analytics.js-integration).

## Settings Configuration

The service names and API key-names provided in the `integrations` section are specific to each platform. Make sure to use the correct service name and key shown for the platform you're adding.

There are other options which are not documented in the example above. To find them search for your specific integration [in this file](https://github.com/okgrow/analytics.js/blob/master/analytics.js) and look at the options and their defaults that are set with `.option(...)`.

## Ad-blocker

If you, or your users, are running an ad blocker in their browser and the analytics package is not bundled into a single JavaScript file to the browser (i.e., downloads as `analytics.js` or something similar) the browser's ad blocker may prevent analytics tracking. This can happen during development mode when all JavaScript files are typically not bundled together.

To solve this problem with a Meteor application, for example, you can run the application in production mode like this:

`meteor run --production --settings settings.json`

**NOTE:** If an Ad-blocker is enabled the expected behaviour is that your analytic events will not be received. You will see an error message in your console reporting the events being blocked.

### Page views

Compatible with any router, this package will log page views automatically. Each page is logged with the follow parameters:

 * `path`: path part of the URL
 * `title`: the page's title
 * `url`: hostname + path
 * `search`: the URL's query string, if provided. blank otherwise
 * `referrer`: hostname + old path, if coming from a previous route

To disable automatic page view tracking add ```autorun: false``` to your settings object when configuring then manually log a page view by calling `analytics.page('page name')`:

### Event tracking

Track any event by simply calling the `analytics.track()` function:

```js
analytics.track("Bought Ticket", {
  eventName: "Wine Tasting",
  couponValue: 50,
});
```

Check Segment.io's [analytics.js track documentation](https://segment.com/docs/libraries/analytics.js/#track) for a full description of `track()` and all the other functions available in this package.

### Debugging

When adding your platforms and setting events to track you may want to keep debug on locally. This will log all the analytics package's activity to the console.

To turn on debugging, in the console:

`> analytics.debug()`

Turn debugging off, in the console:

`> analytics.debug(false)`

### Example React Router Application

This package includes an `examples` directory containing a simple (Meteor) application using react-router with a `analytics.min.js` containing only the `Google Analytics` and `Mixpanel` integrations. This is just an example with a common router and doesn't imply this plugin only works with this router or only with Meteor. This application can be run from its directory with:

`meteor --settings settings.json --production`.

## Maintainers

This is an open source package. We hope to deal with contributions in a timely manner, but that's not always the case. The main maintainers are:

[@okgrow](https://github.com/okgrow)

Feel free to ping if there are open issues or pull requests which are taking a while to be dealt with!

## Contributing

Issues and Pull Requests are always welcome.

Please read our [contribution guidelines](https://github.com/okgrow/guides/blob/master/open-source/contributing.md).

If you are interested in becoming a maintainer, get in touch with us by sending an email or opening an issue. You should already have code merged into the project. Active contributors are encouraged to get in touch.

Please note that all interactions in @okgrow's repos should follow our [Code of Conduct](https://github.com/okgrow/guides/blob/master/open-source/CODE_OF_CONDUCT.md).

## License

Released under the [MIT license](https://github.com/okgrow/analytics/blob/master/License.md) © 2017 OK GROW!.
