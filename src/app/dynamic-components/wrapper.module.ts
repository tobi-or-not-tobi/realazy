import { NgModule } from '@angular/core';
import { BannerModule as libraryBannerModule } from 'components';

@NgModule({
  imports: [libraryBannerModule],
  exports: [libraryBannerModule]
})
export class BannerModule {}
