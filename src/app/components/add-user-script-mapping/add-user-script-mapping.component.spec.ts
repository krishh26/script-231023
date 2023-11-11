import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserScriptMappingComponent } from './add-user-script-mapping.component';

describe('AddUserScriptMappingComponent', () => {
  let component: AddUserScriptMappingComponent;
  let fixture: ComponentFixture<AddUserScriptMappingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddUserScriptMappingComponent]
    });
    fixture = TestBed.createComponent(AddUserScriptMappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
