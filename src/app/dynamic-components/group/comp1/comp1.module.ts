import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Comp1Component } from './comp1.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Comp1Component],
  entryComponents: [Comp1Component]
})
export class Comp1Module {}
