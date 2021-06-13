import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CropFormComponent } from './crop-form.component';

describe('CropFormComponent', () => {
  let component: CropFormComponent;
  let fixture: ComponentFixture<CropFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CropFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CropFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
