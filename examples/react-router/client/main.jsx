/* globals document */

import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { Random } from 'meteor/random';
import { render } from 'react-dom';
import { Router, Route, browserHistory, Link } from 'react-router';

import OKGAnalytics from '@okgrow/auto-analytics';

import './main.html';
// NOTE: import your own custom built segment analytics.js like below.
// You can find out how to build your analytics.js here https://github.com/okgrow/analytics.js
// In this example our analytics.js is bundled with only Google Analytics & Mixpanel
import analytics from '../imports/analytics.min';

const settings = (Meteor.settings
                  && Meteor.settings.public
                  && Meteor.settings.public.analyticsSettings)
                  || false;

// NOTE: Initialize the @okgrow/auto-analytics package.
OKGAnalytics({ analytics, settings });

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      log: [],
    };

    analytics.on('page', (event, properties, options) => { // eslint-disable-line no-undef
      const log = this.state.log;
      log.push(`Page: ${options.path}`);
      this.setState({ log });
    });

    analytics.on('track', (event, properties, options) => { // eslint-disable-line no-undef, no-unused-vars
      const log = this.state.log;
      log.push(`Track: ${event}`);
      this.setState({ log });
    });
  }

  render() {
    return (
      <div>
        <Link to="/one">One</Link>
        <Link to="/two">Two</Link>
        <Link to="/three">Three</Link>
        <div>
          <h3>Current route</h3>
          {this.props.route.path}
        </div>
        <div>
          <h3>Latest Analytics Logged</h3>
          <ul>
            {
              this.state.log.map(l => (
                <li key={Random.id()}>{l}</li>
              ))
            }
          </ul>
        </div>
        <p>Want to see more detail? Call <code style={{ backgroundColor: 'blueviolet', padding: 4, color: 'white' }}>analytics.debug()</code> in the browser console and refresh.</p>
      </div>
    );
  }
}

Meteor.startup(() => {
  render(
    <Router history={browserHistory}>
      <Route path="/" component={App} />
      <Route path="/one" component={App} />
      <Route path="/two" component={App} />
      <Route path="/three" component={App} />
    </Router>,
    document.getElementById('render-target'),
  );
});
