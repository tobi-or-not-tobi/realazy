import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParagraphComponent } from './paragraph.component';
import { DYNAMIC_COMPONENT } from 'components';

@NgModule({
  imports: [CommonModule],
  declarations: [ParagraphComponent],
  entryComponents: [ParagraphComponent],
  providers: [{ provide: DYNAMIC_COMPONENT, useValue: ParagraphComponent }]
})
export class ParagraphModule {}
