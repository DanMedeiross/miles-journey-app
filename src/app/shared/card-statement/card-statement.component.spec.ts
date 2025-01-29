import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardStatementComponent } from './card-statement.component';

describe('CardStatementComponent', () => {
  let component: CardStatementComponent;
  let fixture: ComponentFixture<CardStatementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardStatementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardStatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
