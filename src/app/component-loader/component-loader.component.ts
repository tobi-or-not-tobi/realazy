import { Component, ViewContainerRef, ViewChild } from '@angular/core';
import { DynamicComponentLoader } from './dynamic-component-loader.service';

@Component({
  selector: 'app-component-loader',
  templateUrl: './component-loader.component.html',
  styleUrls: ['./component-loader.component.scss']
})
export class ComponentLoaderComponent {
  @ViewChild('wrapper', { read: ViewContainerRef })
  wrapper: ViewContainerRef;

  constructor(private dynamicComponentLoader: DynamicComponentLoader) {}

  loadComponent(componentId: string) {
    this.dynamicComponentLoader.getComponentFactory<any>(componentId).subscribe(
      componentFactory => {
        this.wrapper.createComponent(componentFactory);
      },
      error => {
        console.warn(error);
      }
    );
  }

  loadComponents(components: string[]) {
    components.forEach(componentId => this.loadComponent(componentId));
  }
}
