import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtractivosComponent } from './atractivos.component';

describe('AtractivosComponent', () => {
  let component: AtractivosComponent;
  let fixture: ComponentFixture<AtractivosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AtractivosComponent]
    });
    fixture = TestBed.createComponent(AtractivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
