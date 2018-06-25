import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContainerComponent } from './container/container.component';

const routes: Routes = [
  {
    path: 'sub',
    component: ContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  entryComponents: [ContainerComponent],
  exports: [RouterModule]
})
export class Mod1RoutingModule {}
