import { InjectionToken } from '@angular/core';

export interface DynamicComponentManifest {
  componentId: string;
  path: string;
  loadChildren: string;
}

export const DYNAMIC_COMPONENT_MANIFESTS = new InjectionToken<any>('DYNAMIC_COMPONENT_MANIFESTS');

export const DYNAMIC_COMPONENT = new InjectionToken<any>('DYNAMIC_COMPONENT');
