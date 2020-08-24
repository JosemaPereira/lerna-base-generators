import React from 'react';
import { injectIntl } from 'react-intl';
import { mainMessages } from './messages';

export const Main = injectIntl(({ intl }) => (
  <header className="container-fluid">
    <div className="row">
      <div className="col">
        <h1>{intl.formatMessage(mainMessages.title)}</h1>
        <a href="/">
        </a>
      </div>
    </div>
  </header>
));
