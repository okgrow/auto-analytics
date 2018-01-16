# Change Log
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

## [Unreleased]

## [2.0.0] - 2018-01-16
### Changed
- **BREAKING:** No longer bundling vendor `analytics.min.js` with our package. You must now create your own `analytics.min.js` file. Please refer to [README](https://github.com/okgrow/auto-analytics#creating-segments-analyticsjs) for instructions on how to build your own analytics integration bundle.
- **BREAKING:** Default function is no longer exported. Replaced with `initAnalytics()`. You must import as follows: `import { initAnalytics } from '@okgrow/auto-analytics'`.
- `initAnalytics()` now expects a single object param which contains `analytics.js`, segment's `integrations` & `options`, and `autorun`. e.g - `initAnalytics({ analytics, integrations, options, autorun })`. Please refer to README for more details.
- Example updated with only the `Google Analytics` and `Mixpanel` integrations bundled in `analytics.min.js`.
- [Rollup.js](https://rollupjs.org/) is now used for bundling the auto-analytics package instead of a custom babel script.
- `.babelrc` now has a `build` & `test` config.
- `.npmignore` has been removed and `files: ['dist']` has been added to `package.json` instead.

## [1.0.6] - 2017-11-27
### Fixed
- Ensure that any existing state is copied across when we use `replaceState()` in `logFirstPageLoad()`. More details -> [PR #19](https://github.com/okgrow/auto-analytics/pull/19)

## [1.0.5] - 2017-11-04
### Fixed
- Handle missing state when setting referrer. More details -> [#16](https://github.com/okgrow/auto-analytics/issues/16)

## [1.0.4] - 2017-10-16
### Changed
- Update `analytics.min.js` to latest released version
### Fixed
- Don't include Fragment Identifier (e.g - `#foo` ) in our `document.referrer`. Fixes [#14](https://github.com/okgrow/auto-analytics/issues/14)

## [1.0.3] - 2017-10-02
### Fixed
- Referrer will now correctly reference the original referrer when browsers back/fwd buttons are used.
- Title & Name will will not be from the previous route when packages like react-helmet, or react-document-title, etc... are used to set the `document.title`.

## [1.0.2] - 2017-06-09
### Removed
- `babel-runtime` has been removed from build process.

## [1.0.1] - 2017-03-17
### Changed
- Publishing package on npm as `@okgrow/auto-analytics`.

### Deprecated
- Package is no longer published to npm as `okgrow-auto-analytics`.

### Fixed
- Pass the correct params to `logPageLoad()`

## [1.0.0] - 2017-03-16
### Added
- Initial Release - released as `okgrow-auto-analytics` on npm.
- Extracted the non Meteor specific .js code from our Meteor-specific package.
