import { DynamicComponentManifest } from 'components';

export const componentManifests: DynamicComponentManifest[] = [
  {
    componentId: 'banner',
    path: 'dynamic-banner',
    // loadChildren: './dynamic-components/banner/banner.module#BannerModule'
    loadChildren: './dynamic-components/wrapper.module#BannerModule'
    // loadChildren: 'components#BannerComponent'
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
