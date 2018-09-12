import { Component, AfterViewInit, ViewChild, ViewContainerRef } from '@angular/core';

import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';
import { DynamicRoutesService } from './localized-routes/dynamic-routes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {}
