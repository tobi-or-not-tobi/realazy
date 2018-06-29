import { DynamicComponentManifest } from './dynamic-component-loader/dynamic-component.manifest';

export const comonentManifests: DynamicComponentManifest[] = [
  // {
  //   componentId: 'message',
  //   path: 'dynamic-message',
  //   loadChildren: './dynamic-modules/message/message.module#MessageModule'
  // },
  {
    componentId: 'banner',
    path: 'dynamic-banner',
    loadChildren: './dynamic-components/banner/banner.module#BannerModule'
  },
  {
    componentId: 'paragraph',
    path: 'dynamic-paragraph',
    loadChildren: './dynamic-components/paragraph/paragraph.module#ParagraphModule'
  }
  // {
  //   componentId: 'banner2',
  //   path: 'dynamic-banner2',
  //   loadChildren: './dynamic-modules/banner/group.module#GroupModule'
  // }
];
