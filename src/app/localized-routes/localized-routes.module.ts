import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocalizedRoutesComponent } from './localized-routes.component';

import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './main.component';

// AoT requires an exported function for factories
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, 'http://localhost:3000/locales/', '');
}

@NgModule({
  imports: [
    CommonModule,
    RouterModule,

    AppRoutingModule,

    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  declarations: [MainComponent, LocalizedRoutesComponent],
  exports: [LocalizedRoutesComponent]
})
export class LocalizedRoutesModule {}
