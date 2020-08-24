import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the language domain
 */

export const selectLanguage = state => state.language || initialState;

/**
 * Select the language locale
 */

export const makeSelectLocale = () =>
  createSelector(selectLanguage, languageState => languageState.locale);
