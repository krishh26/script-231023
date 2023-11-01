import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGameMasterComponent } from './add-game-master.component';

describe('AddGameMasterComponent', () => {
  let component: AddGameMasterComponent;
  let fixture: ComponentFixture<AddGameMasterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddGameMasterComponent]
    });
    fixture = TestBed.createComponent(AddGameMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
