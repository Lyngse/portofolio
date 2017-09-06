import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralClassesComponent } from './general-classes.component';

describe('GeneralClassesComponent', () => {
  let component: GeneralClassesComponent;
  let fixture: ComponentFixture<GeneralClassesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralClassesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralClassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
