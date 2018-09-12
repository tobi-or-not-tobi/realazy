import { Component, AfterViewInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DynamicRoutesService } from './dynamic-routes.service';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';

@Component({
  selector: 'app-localized-routes',
  templateUrl: './localized-routes.component.html',
  styleUrls: ['./localized-routes.component.scss']
})
export class LocalizedRoutesComponent implements AfterViewInit {
  param = { value: 'world', more: 'more' };

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
