import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUnicornComponent } from './edit-unicorn.component';

describe('EditUnicornComponent', () => {
  let component: EditUnicornComponent;
  let fixture: ComponentFixture<EditUnicornComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditUnicornComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditUnicornComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
