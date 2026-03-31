import { ComponentType, LazyExoticComponent } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type LazyComponent = LazyExoticComponent<ComponentType<any>>;

export interface PagesModule {
  path: string;
  exact: boolean;
  component: LazyComponent;
}
