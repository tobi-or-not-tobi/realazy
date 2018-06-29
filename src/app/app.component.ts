import { Component, AfterViewInit } from '@angular/core';

import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';
import { DynamicRoutesService } from './shared/dynamic-routes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  param = { value: 'world', more: 'more' };
  title = 'app';

  isLocaleLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

  constructor(private translate: TranslateService, private dynamicRoutesService: DynamicRoutesService) {
    this.dynamicRoutesService.createRoute([
      {
        path: 'PRODUCTS',
        loadChildren: './mod1/mod1.module#Mod1Module'
      }
    ]);
  }

  ngAfterViewInit() {
    this.initLanguageSwitcher();
  }

  private initLanguageSwitcher() {
    // this language will be used as a fallback when a translation isn't found in the current language
    this.translate.setDefaultLang('en');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    this.translate.use('en');

    // whenever we've toggle the (inital) language we reset the locale loading indicator
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.isLocaleLoading.next(false);
    });
  }

  toggleLanguage(event) {
    this.isLocaleLoading.next(true);
    this.translate.use(event.target.value);
  }
}
