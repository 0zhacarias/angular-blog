import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BirCardComponent } from './bir-card.component';

describe('BirCardComponent', () => {
  let component: BirCardComponent;
  let fixture: ComponentFixture<BirCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BirCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BirCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
