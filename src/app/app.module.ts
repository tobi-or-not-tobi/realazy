import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { componentManifests } from './config';
import { ComponentLoaderModule } from './component-loader/component-loader.module';
import { LocalizedRoutesModule } from './localized-routes/localized-routes.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ComponentLoaderModule.forRoot(componentManifests),
    LocalizedRoutesModule,
    HttpClientModule,
    LocalizedRoutesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
