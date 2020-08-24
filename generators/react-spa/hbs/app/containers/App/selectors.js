import { createSelector } from 'reselect';

const selectRouter = state => state.router;

export const makeSelectLocation = () =>
  createSelector(selectRouter, routerState => routerState.location);
