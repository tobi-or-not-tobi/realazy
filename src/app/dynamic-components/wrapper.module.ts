import { NgModule } from '@angular/core';
import { BannerModule as libraryBannerModule } from 'components';

import { GroupModule as libraryGroupModule } from 'components';

@NgModule({
  imports: [libraryBannerModule],
  exports: [libraryBannerModule]
})
export class BannerModule {}

@NgModule({
  imports: [libraryGroupModule],
  exports: [libraryGroupModule]
})
export class GroupModule {}
