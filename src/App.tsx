import React from 'react';

import withProvider from '@interface/hoc/with-provider';
import Router from '@interface/routes/router';
import GlobalStyles from '@interface/styles/GlobalStyles';

const App: React.FC = () => (
  <>
    <GlobalStyles />
    <Router />
  </>
);

export default withProvider(App);
