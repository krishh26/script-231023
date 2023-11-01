import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScriptMasterListComponent } from './script-master-list.component';

describe('ScriptMasterListComponent', () => {
  let component: ScriptMasterListComponent;
  let fixture: ComponentFixture<ScriptMasterListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScriptMasterListComponent]
    });
    fixture = TestBed.createComponent(ScriptMasterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
