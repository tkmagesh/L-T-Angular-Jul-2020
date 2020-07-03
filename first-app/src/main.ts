import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

//import * as calculator from './calc';
//console.log(calculator);
//let add = calculator.add;
//let { add } = calculator;

/* import { add } from './calc';
console.log(add(100,200)); */

//importing the default export object
/* import x from './calc';
console.log(x); */

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
