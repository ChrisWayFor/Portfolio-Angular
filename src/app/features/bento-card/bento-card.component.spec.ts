import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BentoCardComponent } from './bento-card.component';

describe('BentoCardComponent', () => {
  let component: BentoCardComponent;
  let fixture: ComponentFixture<BentoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BentoCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BentoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
