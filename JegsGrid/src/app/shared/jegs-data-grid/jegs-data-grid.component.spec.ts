import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JegsDataGridComponent } from './jegs-data-grid.component';

describe('JegsDataGridComponent', () => {
  let component: JegsDataGridComponent;
  let fixture: ComponentFixture<JegsDataGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JegsDataGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JegsDataGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
