import { NgModule } from '@angular/core';
import { ParagraphModule as libraryParagraphModule } from 'components';

@NgModule({
  imports: [libraryParagraphModule],
  exports: [libraryParagraphModule]
})
export class ParagraphModule {}
