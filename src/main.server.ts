import { BootstrapContext, bootstrapApplication } from '@angular/platform-browser';
import { HomePage } from './app/page/HomePage/HomePage';
import { config } from './app/app.config.server';

const bootstrap = (context: BootstrapContext) =>
    bootstrapApplication(HomePage, config, context);

export default bootstrap;
