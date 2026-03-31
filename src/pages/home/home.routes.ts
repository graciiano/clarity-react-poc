import { lazy } from 'react';

import { PagesModule } from '@interface/app-types/pages';
import { ROUTES } from '@interface/constants/routes';

const homeRoutes: PagesModule[] = [
  {
    path: ROUTES.HOME,
    exact: true,
    component: lazy(() => import('./home.page')),
  },
];

export default homeRoutes;
