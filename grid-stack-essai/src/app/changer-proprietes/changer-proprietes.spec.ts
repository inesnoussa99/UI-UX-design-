import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangerProprietes } from './changer-proprietes';

describe('ChangerProprietes', () => {
  let component: ChangerProprietes;
  let fixture: ComponentFixture<ChangerProprietes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChangerProprietes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangerProprietes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
