import { Injectable } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { map } from 'rxjs/operators';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Injectable({
  providedIn: 'root'
})
export class DynamicRoutesService {
  constructor(private router: Router, private translate: TranslateService) {}

  createRoute(routes?: Routes) {
    if (!routes) {
      return;
    }

    // we keep the original path in the route, so that whenever we switch later
    // we have a key to the translation
    routes.forEach(route => (route['originalPath'] = route.path));

    this.localizeRoutes(routes);
  }

  /**
   * route path localisation should be done in async mode
   * since the route config could be loaded from a backend
   *
   * TODO: redirect the existing routes
   * TODO: support multiple route parts
   * TODO: support parameters
   */
  private localizeRoutes(routes) {
    // each time the language changes we need to get a translated route
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      routes.forEach(route => {
        const routes = event.translations.ROUTES;

        // we need to keep the original path temporarily
        // so we can translate after a language switch
        route.path = routes[route['originalPath']];

        this.router.config.unshift(route);
      });
    });
  }
}
