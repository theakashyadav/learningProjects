import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',redirectTo:'communication',pathMatch:'full'},
  {path:'communication',loadChildren:   () => import('../app/Session_One/communication/communication.module').then(m => m.CommunicationModule)},
  // {path:'UserMood',loadChildren: () => import('../app/Session_Two/input-output.module').then(m => m.InputOutputModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
