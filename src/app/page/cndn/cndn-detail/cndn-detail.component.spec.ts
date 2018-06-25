import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CndnDetailComponent } from './cndn-detail.component';

describe('CndnDetailComponent', () => {
  let component: CndnDetailComponent;
  let fixture: ComponentFixture<CndnDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CndnDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CndnDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
