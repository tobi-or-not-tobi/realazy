import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Comp1Module } from './comp1/comp1.module';
import { Comp2Module } from './comp2/comp2.module';
import { DYNAMIC_COMPONENT } from '../../dynamic-component-loader/dynamic-component.manifest';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';

@NgModule({
  imports: [CommonModule, Comp1Module, Comp2Module],
  providers: [{ provide: DYNAMIC_COMPONENT, useValue: { comp1: Comp1Component, comp2: Comp2Component } }]
})
export class GroupModule {}
