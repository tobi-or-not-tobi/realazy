import { Component } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';
import { FromEventTarget } from 'rxjs/internal/observable/fromEvent';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  param = { value: 'world', more: 'more' };
  title = 'app';

  constructor(private translate: TranslateService) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('en');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('en');
  }

  toggleLanguage(event) {
    console.log(event.target.value);
    this.translate.use(event.target.value);
  }
}
