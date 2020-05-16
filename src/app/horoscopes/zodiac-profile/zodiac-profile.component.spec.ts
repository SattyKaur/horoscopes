import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZodiacProfileComponent } from './zodiac-profile.component';

describe('ZodiacProfileComponent', () => {
  let component: ZodiacProfileComponent;
  let fixture: ComponentFixture<ZodiacProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZodiacProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZodiacProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
