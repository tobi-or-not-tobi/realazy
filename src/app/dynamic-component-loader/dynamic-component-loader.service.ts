import { NgModuleFactoryLoader, Injectable, Inject, Injector, ComponentFactory } from '@angular/core';
import { DYNAMIC_COMPONENT_MANIFESTS, DynamicComponentManifest, DYNAMIC_COMPONENT } from './dynamic-component.manifest';

import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DynamicComponentLoader {
  constructor(
    @Inject(DYNAMIC_COMPONENT_MANIFESTS) private manifests: DynamicComponentManifest[],
    private loader: NgModuleFactoryLoader,
    private injector: Injector
  ) {}

  /**
   * gets a component factory for the given componentId
   *
   * @param componentId
   * @param injector
   */
  getComponentFactory<T>(componentId: string, injector?: Injector): Observable<ComponentFactory<T>> {
    const manifest = this.manifests.find(m => m.componentId === componentId);

    const p = this.loader.load(manifest.loadChildren).then(ngModuleFactory => {
      const moduleRef = ngModuleFactory.create(injector || this.injector);
      // Read from the moduleRef injector and locate the dynamic component type
      let dynamicComponentType = moduleRef.injector.get(DYNAMIC_COMPONENT);

      // Resolve this component factory
      return moduleRef.componentFactoryResolver.resolveComponentFactory<T>(dynamicComponentType);
    });

    return from(p);
  }
}
