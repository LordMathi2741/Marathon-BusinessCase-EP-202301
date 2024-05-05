import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheRecordsPageComponent } from './the-records-page.component';

describe('TheRecordsPageComponent', () => {
  let component: TheRecordsPageComponent;
  let fixture: ComponentFixture<TheRecordsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheRecordsPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TheRecordsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
