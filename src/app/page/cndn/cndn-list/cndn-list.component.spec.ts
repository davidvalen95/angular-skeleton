import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CndnListComponent } from './cndn-list.component';

describe('CndnListComponent', () => {
  let component: CndnListComponent;
  let fixture: ComponentFixture<CndnListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CndnListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CndnListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
