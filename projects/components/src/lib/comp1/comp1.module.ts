import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Comp1Component } from './comp1.component';
import { DYNAMIC_COMPONENT } from '../dynamic-component.manifest';

@NgModule({
  imports: [CommonModule],
  declarations: [Comp1Component],
  entryComponents: [Comp1Component],
  providers: [{ provide: DYNAMIC_COMPONENT, useValue: Comp1Component }]
})
export class Comp1Module {}
