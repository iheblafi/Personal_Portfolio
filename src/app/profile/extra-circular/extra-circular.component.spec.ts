import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtraCircularComponent } from './extra-circular.component';

describe('ExtraCircularComponent', () => {
  let component: ExtraCircularComponent;
  let fixture: ComponentFixture<ExtraCircularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtraCircularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtraCircularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
