import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnicornsComponent } from './unicorns.component';

describe('UnicornsComponent', () => {
  let component: UnicornsComponent;
  let fixture: ComponentFixture<UnicornsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnicornsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UnicornsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
