import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheRecordTableComponent } from './the-record-table.component';

describe('TheRecordTableComponent', () => {
  let component: TheRecordTableComponent;
  let fixture: ComponentFixture<TheRecordTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheRecordTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TheRecordTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
