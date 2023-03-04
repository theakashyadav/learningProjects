import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMoodSelectionComponent } from './user-mood-selection.component';

describe('UserMoodSelectionComponent', () => {
  let component: UserMoodSelectionComponent;
  let fixture: ComponentFixture<UserMoodSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserMoodSelectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserMoodSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
