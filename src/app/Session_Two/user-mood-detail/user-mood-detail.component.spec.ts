import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMoodDetailComponent } from './user-mood-detail.component';

describe('UserMoodDetailComponent', () => {
  let component: UserMoodDetailComponent;
  let fixture: ComponentFixture<UserMoodDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserMoodDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserMoodDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
