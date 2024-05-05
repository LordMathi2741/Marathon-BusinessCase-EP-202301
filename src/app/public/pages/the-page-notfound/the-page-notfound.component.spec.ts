import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThePageNotfoundComponent } from './the-page-notfound.component';

describe('ThePageNotfoundComponent', () => {
  let component: ThePageNotfoundComponent;
  let fixture: ComponentFixture<ThePageNotfoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThePageNotfoundComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThePageNotfoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
