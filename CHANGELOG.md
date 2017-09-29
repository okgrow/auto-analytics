# Change Log
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

## [Unreleased]
### Changed
- Stop bundling `analytics.min.js` with our package.
- Default function is no longer exported. Replaced with `initAnalytics()`.
- `initAnalytics()` now accepts a single object containing `analytics.js`, segment's `integrations` & `options`, and `autorun`. e.g - `OKGAnalytics({ analytics, integrations, options, autorun })`.
- Example updated with only the `Google Analytics` and `Mixpanel` integrations bundled in `analytics.min.js`.
- Rollup.js is now used for bundling the auto-analytics package instead of a custom babel script.
- .babelrc now has a `build` & `test` config.
- `.npmignore` has been removed and `files: ['dist']` has been added to `package.json` instead.

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
