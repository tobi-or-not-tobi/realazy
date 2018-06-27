import { Component, OnInit } from '@angular/core';
import { DynamicRoutesService } from '../shared/dynamic-routes.service';

@Component({
  template: `
  <p>this is a lazy loaded (container) component</p>
  <div>{{ 'LAZY' | translate }}</div>
  `
})
export class ContainerComponent implements OnInit {
  constructor(private dynamicRoutesService: DynamicRoutesService) {}

  ngOnInit() {
    this.dynamicRoutesService.createRoute();
  }
}
