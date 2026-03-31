import { PagesModule } from '@interface/app-types/pages';
import homeRoutes from '@interface/pages/home/home.routes';
import productsRegisterRoutes from '@interface/pages/products-register/products-register.routes';
import productsRoutes from '@interface/pages/products/products.routes';

const routes: PagesModule[] = [...homeRoutes, ...productsRegisterRoutes, ...productsRoutes];

export default routes;
