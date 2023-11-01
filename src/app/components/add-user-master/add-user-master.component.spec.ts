import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserMasterComponent } from './add-user-master.component';

describe('AddUserMasterComponent', () => {
  let component: AddUserMasterComponent;
  let fixture: ComponentFixture<AddUserMasterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddUserMasterComponent]
    });
    fixture = TestBed.createComponent(AddUserMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
