import { DynamicComponentManifest } from './dynamic-component-loader/dynamic-component.manifest';

export const comonentManifests: DynamicComponentManifest[] = [
  {
    componentId: 'banner',
    path: 'dynamic-banner',
    loadChildren: './dynamic-components/banner/banner.module#BannerModule'
  },
  {
    componentId: 'paragraph',
    path: 'dynamic-paragraph',
    loadChildren: './dynamic-components/paragraph/paragraph.module#ParagraphModule'
  },
  {
    componentId: 'comp1',
    path: 'dynamic-comp1',
    loadChildren: './dynamic-components/group/group.module#GroupModule'
  },
  {
    componentId: 'comp2',
    path: 'dynamic-comp2',
    loadChildren: './dynamic-components/group/group.module#GroupModule'
  }
];
