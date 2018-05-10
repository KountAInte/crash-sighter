import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrashTableComponent } from './crash-table.component';

describe('CrashTableComponent', () => {
  let component: CrashTableComponent;
  let fixture: ComponentFixture<CrashTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrashTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrashTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
