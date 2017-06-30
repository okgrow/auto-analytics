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

## Install

```sh
npm install @okgrow/auto-analytics --save
```

## Currently Supported Analytic Services

* Amplitude
* Chartbeat
* comScore
* Google Analytics
* HubSpot
* Intercom
* Keen IO
* KISSmetrics
* Mixpanel
* Quantcast
* Segment.io

## Ad-blocker

If you, or your users, are running an ad blocker in their browser and the analytics package is not bundled into a single JavaScript file to the browser (i.e., is downloads as analytics.js or something similar) the browser's ad blocker may prevent analytics tracking. This can happen during development mode when all JavaScript files are typically not bundled together.

To solve this problem with a Meteor application, for example, you can run the application in production mode like this:

`meteor run --production --settings settings.json`

**NOTE:** If an Adblocker is enabled the expected behavior is that your analytic events will not be received. You will see an error message in your console reporting the events being blocked.

## Configuration

Add various platforms by adding each tool's configuration to the settings object passed to OKGAnalytics:

```js
import OKGAnalytics, { analytics } from '@okgrow/auto-analytics';

const settings = {
  // Add your analytics tracking ids here (remove this line before running)
  "Google Analytics" : {"trackingId": "Your tracking ID"},
  "Amplitude"        : {"apiKey": "..."},
  "Chartbeat"        : {"uid": "..."},
  "comScore"         : {"c2": "..."},
  "HubSpot"          : {"portalId": "..."},
  "Intercom"         : {"appId": "..."},
  "Keen IO"          : {"projectId": "...", "writeKey": "..."},
  "KISSmetrics"      : {"apiKey": "..."},
  "Mixpanel"         : {"token":  "...", "people": true},
  "Quantcast"        : {"pCode": "..."},
  "Segment.io"       : {"apiKey": "..."}
};

OKGAnalytics(settings);
```

The service names and API key-names provided above are specific to each platform. Make sure to use the correct service name and key shown for the platform you're adding.

There are other options which not documented here. To find them search for your specific integration [in this file](https://github.com/okgrow/analytics.js/blob/master/analytics.js) and look at the options and their defaults that are set with `.option(...)`.

If you use a different service for tracking events or page views and you think it's popular enough that we should add it then please open an issue on the repo and we'll see how many supporters we get. Each additional integration adds a small amount to the file size so we want to support only the most common ones to economize the download size of this package.

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

This package includes an `examples` directory containing a simple (Meteor) application using react-router. This is just an example with a common router and doesn't imply this plugin only works with this router or only with Meteor. This application can be run from its directory with:

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
