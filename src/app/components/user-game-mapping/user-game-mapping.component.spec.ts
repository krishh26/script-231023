import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserGameMappingComponent } from './user-game-mapping.component';

describe('UserGameMappingComponent', () => {
  let component: UserGameMappingComponent;
  let fixture: ComponentFixture<UserGameMappingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserGameMappingComponent]
    });
    fixture = TestBed.createComponent(UserGameMappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
