import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UpgradeModule, downgradeComponent } from '@angular/upgrade/static';

import { AppRoutingModule } from './app-routing.module';
import { DowngradableComponent } from './downgradable/downgradable.component';

declare var angular: any;

angular
  .module('angularJsApp')
  .directive('ng2Dg', downgradeComponent({ component: DowngradableComponent }));

@NgModule({
  declarations: [DowngradableComponent],
  imports: [BrowserModule, AppRoutingModule, UpgradeModule],
  entryComponents: [
    DowngradableComponent, // Don't forget this!!!
  ],
  providers: [],
  // bootstrap: [AppComponent] // No Bootstrap-Component
})
export class AppModule {
  constructor(private upgrade: UpgradeModule) {}
  ngDoBootstrap() {
    this.upgrade.bootstrap(document.body, ['angularJsApp']);
  }
}
