import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMasterListComponent } from './user-master-list.component';

describe('UserMasterListComponent', () => {
  let component: UserMasterListComponent;
  let fixture: ComponentFixture<UserMasterListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserMasterListComponent]
    });
    fixture = TestBed.createComponent(UserMasterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
