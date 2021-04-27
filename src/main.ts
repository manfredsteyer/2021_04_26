import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import de from '@angular/common/locales/de';
import en from '@angular/common/locales/en';

import { registerLocaleData }  from '@angular/common';

registerLocaleData(de);
registerLocaleData(en);

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
