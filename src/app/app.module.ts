import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpgradeModule, downgradeComponent } from '@angular/upgrade/static';

import { AppRoutingModule } from './app-routing.module';
import { DowngradableComponent } from './downgradable/downgradable.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from './material.module';

declare var angular: any;

angular
  .module('angularJsApp')
  .directive('ng2Dg', downgradeComponent({ component: DowngradableComponent }));

@NgModule({
  declarations: [DowngradableComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UpgradeModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    DemoMaterialModule // custom module which includes all material modules
  ],
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
