import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserGameMappingComponent } from './add-user-game-mapping.component';

describe('AddUserGameMappingComponent', () => {
  let component: AddUserGameMappingComponent;
  let fixture: ComponentFixture<AddUserGameMappingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddUserGameMappingComponent]
    });
    fixture = TestBed.createComponent(AddUserGameMappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
