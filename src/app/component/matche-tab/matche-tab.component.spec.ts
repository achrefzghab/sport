import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatcheTabComponent } from './matche-tab.component';

describe('MatcheTabComponent', () => {
  let component: MatcheTabComponent;
  let fixture: ComponentFixture<MatcheTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatcheTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatcheTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
