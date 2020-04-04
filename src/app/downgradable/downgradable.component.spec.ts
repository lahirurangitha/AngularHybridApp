import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DowngradableComponent } from './downgradable.component';

describe('DowngradableComponent', () => {
  let component: DowngradableComponent;
  let fixture: ComponentFixture<DowngradableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DowngradableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DowngradableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
