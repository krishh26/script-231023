import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameMasterListComponent } from './game-master-list.component';

describe('GameMasterListComponent', () => {
  let component: GameMasterListComponent;
  let fixture: ComponentFixture<GameMasterListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GameMasterListComponent]
    });
    fixture = TestBed.createComponent(GameMasterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
