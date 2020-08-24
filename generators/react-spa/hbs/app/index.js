import ReactDOM from 'react-dom';
import { render } from './app';
import { MOUNT_NODE, polyfillIntl } from './common';
import { translationMessages } from './i18n';

if (module.hot) {
  // Hot reloadable React components and translation json files
  // modules.hot.accept does not accept dynamic dependencies,
  // have to be constants at compile-time
  module.hot.accept(['./i18n', 'containers/App'], () => {
    ReactDOM.unmountComponentAtNode(MOUNT_NODE);
    render(translationMessages);
  });
}

polyfillIntl().then(() => render(translationMessages));
