import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserScriptMappingComponent } from './user-script-mapping.component';

describe('UserScriptMappingComponent', () => {
  let component: UserScriptMappingComponent;
  let fixture: ComponentFixture<UserScriptMappingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserScriptMappingComponent]
    });
    fixture = TestBed.createComponent(UserScriptMappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
