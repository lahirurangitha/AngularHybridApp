import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UpgradeModule, downgradeComponent } from '@angular/upgrade/static';

import { AppRoutingModule } from './app-routing.module';
import { DowngradableComponent } from './downgradable/downgradable.component';
import { RootComponent } from './root/root.component';

declare var angular: any;

angular
  .module('angularJsApp')
  .directive('ng2Dg', downgradeComponent({ component: DowngradableComponent }));

@NgModule({
  declarations: [RootComponent, DowngradableComponent],
  imports: [BrowserModule, AppRoutingModule, UpgradeModule],
  entryComponents: [
    DowngradableComponent,
  ],
  providers: [],
  bootstrap: [RootComponent] // Bootstrap-Component
})
export class AppModule {
  // Remove code for bootstrapping hybrid app manually !
  /*
    constructor(private upgrade: UpgradeModule) { }
    ngDoBootstrap() {
      this.upgrade.bootstrap(document.body, ['angularJsApp']);
    }
  */
}
