import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner.component';
import { DYNAMIC_COMPONENT } from '../../component-loader/dynamic-component.manifest';

@NgModule({
  imports: [CommonModule],
  declarations: [BannerComponent],
  entryComponents: [BannerComponent],
  providers: [{ provide: DYNAMIC_COMPONENT, useValue: BannerComponent }]
})
export class BannerModule {}
