import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputOutputRoutingModule } from './input-output-routing.module';
import { UserMoodComponent } from './user-mood/user-mood.component';
import { UserMoodSelectionComponent } from './user-mood-selection/user-mood-selection.component';
import { UserMoodDetailComponent } from './user-mood-detail/user-mood-detail.component';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { GeneralComponent } from './general/general.component';


@NgModule({
  declarations: [
    UserMoodComponent,
    UserMoodSelectionComponent,
    UserMoodDetailComponent,
    ThankYouComponent,
    GeneralComponent
  ],
  imports: [
    CommonModule,
    InputOutputRoutingModule
  ]
})
export class InputOutputModule { }
