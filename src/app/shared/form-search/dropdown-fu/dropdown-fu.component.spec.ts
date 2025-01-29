import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownFuComponent } from './dropdown-fu.component';

describe('DropdownFuComponent', () => {
  let component: DropdownFuComponent;
  let fixture: ComponentFixture<DropdownFuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DropdownFuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropdownFuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
