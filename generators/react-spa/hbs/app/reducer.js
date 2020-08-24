import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import { history } from './utils/history';
import { languageProviderReducer } from './containers/LanguageProvider';

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    language: languageProviderReducer,
    router: connectRouter(history),
    ...injectedReducers
  });

  return rootReducer;
}
