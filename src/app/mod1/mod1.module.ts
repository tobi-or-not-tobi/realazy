import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Mod1RoutingModule } from './mod1-routing.module';
import { ContainerComponent } from './container/container.component';

@NgModule({
  imports: [
    CommonModule,
    Mod1RoutingModule
  ],
  declarations: [ContainerComponent]
})
export class Mod1Module { }
