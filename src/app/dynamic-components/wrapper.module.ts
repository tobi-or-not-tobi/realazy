import { NgModule } from '@angular/core';
import { BannerModule as libraryBannerModule } from 'components';

import { ParagraphModule as libraryParagraphModule } from 'components';

@NgModule({
  imports: [libraryBannerModule],
  exports: [libraryBannerModule]
})
export class BannerModule {}

@NgModule({
  imports: [libraryParagraphModule],
  exports: [libraryParagraphModule]
})
export class ParagraphModule {}
