import React, { Suspense } from 'react';

import { BrowserRouter, Switch } from 'react-router-dom';

import routes from '@interface/pages/routes';

import Layout from './layout';
import RouterBuilder from './router-builder';

const Router: React.FC = () => (
  <BrowserRouter>
    <Layout>
      <Suspense fallback={<div style={{ padding: 32, textAlign: 'center' }}>Carregando...</div>}>
        <Switch>
          <RouterBuilder routes={routes} />
        </Switch>
      </Suspense>
    </Layout>
  </BrowserRouter>
);

export default Router;
