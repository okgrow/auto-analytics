# Change Log
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

## [Unreleased]
### Changed
- Stop bundling `analytics.min.js` with our package.
- Default function now accepts a single object containing the `analytics.js` & `settings` object. e.g - `OKGAnalytics({ analytics, settings })`.
- Example updated with only the `Google Analytics` and `Mixpanel` integrations bundled in `analytics.min.js`.

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
