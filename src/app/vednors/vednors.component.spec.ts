import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VednorsComponent } from './vednors.component';

describe('VednorsComponent', () => {
  let component: VednorsComponent;
  let fixture: ComponentFixture<VednorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VednorsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VednorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
