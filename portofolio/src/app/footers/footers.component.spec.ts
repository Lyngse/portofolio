import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FootersComponent } from './footers.component';

describe('FootersComponent', () => {
  let component: FootersComponent;
  let fixture: ComponentFixture<FootersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FootersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FootersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
