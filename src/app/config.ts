import { DynamicComponentManifest } from 'components';

export const componentManifests: DynamicComponentManifest[] = [
  {
    componentId: 'banner',
    path: 'dynamic-banner',
    loadChildren: './dynamic-components/wrapper.module#BannerModule'
  },
  {
    componentId: 'paragraph',
    path: 'dynamic-paragraph',
    loadChildren: './dynamic-components/paragraph.module#ParagraphModule'
  },
  {
    componentId: 'comp1',
    path: 'dynamic-comp1',
    loadChildren: './dynamic-components/wrapper.module#GroupModule'
  },
  {
    componentId: 'comp2',
    path: 'dynamic-comp2',
    loadChildren: './dynamic-components/wrapper.module#GroupModule'
  }
];
