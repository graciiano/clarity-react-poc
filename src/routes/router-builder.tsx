import { Route } from 'react-router-dom';

import { PagesModule } from '@interface/app-types/pages';

interface RouterBuilderProps {
  routes: PagesModule[];
}

function RouterBuilder({ routes }: RouterBuilderProps) {
  return (
    <>
      {routes.map(({ path, exact, component: Component }) => (
        <Route key={path} path={path} exact={exact} component={Component} />
      ))}
    </>
  );
}

export default RouterBuilder;
