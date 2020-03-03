import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JqwidgetComponent } from './jqwidget.component';

describe('JqwidgetComponent', () => {
  let component: JqwidgetComponent;
  let fixture: ComponentFixture<JqwidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JqwidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JqwidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
