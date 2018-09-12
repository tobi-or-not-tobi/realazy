import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Comp2Component } from './comp2.component';
import { DYNAMIC_COMPONENT } from '../dynamic-component.manifest';

@NgModule({
  imports: [CommonModule],
  declarations: [Comp2Component],
  entryComponents: [Comp2Component],
  providers: [{ provide: DYNAMIC_COMPONENT, useValue: Comp2Component }]
})
export class Comp2Module {}
