import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerViewComponent } from './farmer-view.component';

describe('FarmerViewComponent', () => {
  let component: FarmerViewComponent;
  let fixture: ComponentFixture<FarmerViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarmerViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
