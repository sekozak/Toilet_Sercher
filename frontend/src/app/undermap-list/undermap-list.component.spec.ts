import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UndermapListComponent } from './undermap-list.component';

describe('UndermapListComponent', () => {
  let component: UndermapListComponent;
  let fixture: ComponentFixture<UndermapListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UndermapListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UndermapListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
