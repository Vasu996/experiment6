import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpReactiveComponent } from './sing-up-reactive.component';

describe('SingUpReactiveComponent', () => {
  let component: SignUpReactiveComponent;
  let fixture: ComponentFixture<SignUpReactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignUpReactiveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignUpReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
