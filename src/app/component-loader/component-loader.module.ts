import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentLoaderComponent } from './component-loader.component';
import { DynamicComponentManifest, DYNAMIC_COMPONENT_MANIFESTS } from './dynamic-component.manifest';
import { ROUTES } from '@angular/router';

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
