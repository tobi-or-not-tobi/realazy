import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  }
];

// export function HttpLoaderFactory(
//   translate: TranslateService,
//   location: Location,
//   settings: LocalizeRouterSettings,
//   http: HttpClient
// ) {
//   return new LocalizeRouterHttpLoader(translate, location, settings, http, 'assets/i18n/locale-de.json');
// }

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
    // LocalizeRouterModule.forRoot(routes)
    // LocalizeRouterModule.forRoot(routes, {
    //   parser: {
    //     provide: LocalizeParser,
    //     useFactory: HttpLoaderFactory,
    //     deps: [TranslateService, Location, LocalizeRouterSettings, HttpClient]
    //   }
    // })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
