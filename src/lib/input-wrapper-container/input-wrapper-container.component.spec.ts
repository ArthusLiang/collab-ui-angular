import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputWrapperContainerComponent } from './input-wrapper-container.component';

describe('InputWrapperContainerComponent', () => {
  let component: InputWrapperContainerComponent;
  let fixture: ComponentFixture<InputWrapperContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputWrapperContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputWrapperContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
