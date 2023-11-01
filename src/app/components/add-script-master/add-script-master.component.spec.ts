import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddScriptMasterComponent } from './add-script-master.component';

describe('AddScriptMasterComponent', () => {
  let component: AddScriptMasterComponent;
  let fixture: ComponentFixture<AddScriptMasterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddScriptMasterComponent]
    });
    fixture = TestBed.createComponent(AddScriptMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
