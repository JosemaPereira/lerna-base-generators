import React from 'react';
import { render } from '@testing-library/react';
import { FormattedMessage, defineMessages } from 'react-intl';
import { Provider } from 'react-redux';

import { configureStore } from '../../../configureStore';
import { translationMessages } from '../../../i18n';
import { history } from '../../../utils/history';
import { LanguageProviderContainer, LanguageProvider } from '../index';

const messages = defineMessages({
  someMessage: {
    id: 'some.id',
    defaultMessage: 'This is some default message',
    en: 'This is some en message'
  }
});

describe('<LanguageProvider />', () => {
  it('should render its children', () => {
    const children = <h1>Test</h1>;
    const { container } = render(
      <LanguageProvider messages={messages} locale="en">
        {children}
      </LanguageProvider>
    );
    expect(container.firstChild).not.toBeNull();
  });
});

describe('<LanguageProviderContainer />', () => {
  let store;

  beforeAll(() => {
    store = configureStore({}, history);
  });

  it('should render the default language messages', () => {
    const { queryByText } = render(
      <Provider store={store}>
        <LanguageProviderContainer messages={translationMessages}>
          <FormattedMessage {...messages.someMessage} />
        </LanguageProviderContainer>
      </Provider>
    );
    expect(queryByText(messages.someMessage.defaultMessage)).not.toBeNull();
  });
});
