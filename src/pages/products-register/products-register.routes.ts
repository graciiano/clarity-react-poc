import { lazy } from 'react';

import { PagesModule } from '@interface/app-types/pages';
import { ROUTES } from '@interface/constants/routes';

const productsRegisterRoutes: PagesModule[] = [
  {
    path: ROUTES.PRODUCTS_REGISTER,
    exact: true,
    component: lazy(() => import('./products-register.page')),
  },
];

export default productsRegisterRoutes;
