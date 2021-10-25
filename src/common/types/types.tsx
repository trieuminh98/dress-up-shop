export interface Routes {
  path: string;
  exact: boolean;
  component: any;
  routes?: Routes[];
  key: string;
}

export interface RenderRoutesProps {
  routes: Routes[];
}
