import 'core-js/stable';
import {Aurelia} from 'aurelia-framework'
import environment from './environment';
import {PLATFORM} from 'aurelia-pal';
import {App} from "./app";
import "aurelia-ui-framework/css/flag-icons.css";
import "aurelia-ui-framework/css/light-theme.css";

export function configure(aurelia: Aurelia) {
  aurelia.use
    .standardConfiguration()
    .plugin(PLATFORM.moduleName("aurelia-validation"))
    .plugin(PLATFORM.moduleName("aurelia-ui-virtualization"))
    .plugin(PLATFORM.moduleName("aurelia-ui-framework"))
    .feature(PLATFORM.moduleName('resources/index'));

  // Uncomment the line below to enable animation.
  aurelia.use.plugin(PLATFORM.moduleName("aurelia-animator-css"));
  // if the css animator is enabled, add swap-order="after" to all router-view elements

  // Anyone wanting to use HTMLImports to load views, will need to install the following plugin.
  // aurelia.use.plugin(PLATFORM.moduleName('aurelia-html-import-template-loader'));

  if (environment.debug) {
    aurelia.use.developmentLogging();
  }

  if (environment.testing) {
    aurelia.use.plugin(PLATFORM.moduleName('aurelia-testing'));
  }

  return aurelia.start().then(() => aurelia.setRoot(App));
}
