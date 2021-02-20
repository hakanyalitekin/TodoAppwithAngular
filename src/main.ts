import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


//AppModule burada...
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

//Başlangıç aşamasında tarıyıcı ile çalış ve AppModule ile çalışmaya başla demek.
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
