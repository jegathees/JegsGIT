import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JegsVersatileGridComponent } from './jegs-versatile-grid.component';

describe('JegsVersatileGridComponent', () => {
  let component: JegsVersatileGridComponent;
  let fixture: ComponentFixture<JegsVersatileGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JegsVersatileGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JegsVersatileGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
