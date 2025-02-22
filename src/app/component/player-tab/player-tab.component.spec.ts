import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerTabComponent } from './player-tab.component';

describe('PlayerTabComponent', () => {
  let component: PlayerTabComponent;
  let fixture: ComponentFixture<PlayerTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
