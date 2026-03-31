import React, { ComponentType } from 'react';

import { Provider } from 'react-redux';

import store from '@interface/store';

function withProvider(WrappedComponent: ComponentType): React.FC {
  const WithProvider: React.FC = () => (
    <Provider store={store}>
      <WrappedComponent />
    </Provider>
  );

  WithProvider.displayName = `withProvider(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;

  return WithProvider;
}

export default withProvider;
