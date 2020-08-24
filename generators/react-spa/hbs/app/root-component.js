import PropTypes from 'prop-types';
import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import { LanguageProvider } from './containers/LanguageProvider';
import { history } from './utils/history';
import { configureStore } from './configureStore';
import { translationMessages } from './i18n';
import { App as AppContainer } from './containers/App';

const initialState = {};
const store = configureStore(initialState);

export default class App extends React.Component {
  componentDidCatch(err) {
    // eslint-disable-next-line no-console
    console.error(err);
  }

  render() {
    return (
      <Provider store={store}>
        <LanguageProvider
          locale="es-MX"
          messages={this.props.messages || translationMessages}
        >
          <Router history={history}>
            <AppContainer />
          </Router>
        </LanguageProvider>
      </Provider>
    );
  }
}

App.propTypes = {
  messages: PropTypes.shape()
};
