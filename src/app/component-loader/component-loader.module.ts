import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentLoaderComponent } from './component-loader.component';
import { ROUTES } from '@angular/router';
import { DynamicComponentManifest, DYNAMIC_COMPONENT_MANIFESTS } from 'components';

@NgModule({
  imports: [CommonModule],
  declarations: [ComponentLoaderComponent],
  exports: [ComponentLoaderComponent]
})
export class ComponentLoaderModule {
  static forRoot(manifests: DynamicComponentManifest[]): ModuleWithProviders {
    return {
      ngModule: ComponentLoaderModule,
      providers: [
        { provide: ROUTES, useValue: manifests, multi: true },
        { provide: DYNAMIC_COMPONENT_MANIFESTS, useValue: manifests }
      ]
    };
  }
}
