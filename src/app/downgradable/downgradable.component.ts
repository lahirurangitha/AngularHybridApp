import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-downgradable',
  templateUrl: './downgradable.component.html',
  styleUrls: ['./downgradable.component.css']
})
export class DowngradableComponent implements OnInit {

  title = 'Downgraded Component';

  constructor() { }

  ngOnInit(): void {
  }

}
