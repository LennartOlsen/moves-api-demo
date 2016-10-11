import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

// Add the RxJS Observable operators we need in this app.
import './utils/rxjs/rxjs-operators';

const platform = platformBrowserDynamic();

platform.bootstrapModule(AppModule);
