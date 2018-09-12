import { InjectionToken } from '@angular/core';

// This interface should not be changed, as the model ensures that
// the static code analyser that generates chunks for applicaton routes
// will kick in and create a chuk per component
export interface DynamicComponentManifest {
  componentId: string;
  path: string;
  loadChildren: string;
}

export const DYNAMIC_COMPONENT_MANIFESTS = new InjectionToken<any>('DYNAMIC_COMPONENT_MANIFESTS');

export const DYNAMIC_COMPONENT = new InjectionToken<any>('DYNAMIC_COMPONENT');
