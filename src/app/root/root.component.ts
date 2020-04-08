import { Component, OnInit } from '@angular/core';
import { UpgradeModule } from "@angular/upgrade/static";

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css']
})
export class RootComponent implements OnInit {

  constructor(private upgrade: UpgradeModule) { }

  ngOnInit(): void {
    this.upgrade.bootstrap(document.body, ['angularJsApp']);
  }

}
