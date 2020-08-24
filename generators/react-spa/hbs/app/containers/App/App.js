/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router';
import { Main } from '../../components/Main';

export function App() {
  return (
    <Switch>
      <Route exact path="/" component={Main} />
    </Switch>
  );
}
