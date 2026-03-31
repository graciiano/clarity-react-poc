import { lazy } from 'react';

import { PagesModule } from '@interface/app-types/pages';
import { ROUTES } from '@interface/constants/routes';

const productsRoutes: PagesModule[] = [
  {
    path: ROUTES.PRODUCTS,
    exact: true,
    component: lazy(() => import('./products.page')),
  },
];

export default productsRoutes;
