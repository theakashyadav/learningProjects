import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Child1Component } from './Session/child1/child1.component';
import { Child2Component } from './Session/child2/child2.component';
import { Child3Component } from './Session/child3/child3.component';
import { Child4Component } from './Session/child4/child4.component';
import { ParentComponent } from './Session/parent/parent.component';
import { InputOutputModule } from './Session_Two/input-output.module';
//Session_one Module
// import { CommunicationModule } from './Session_One/communication/communication.module';



@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    Child1Component,
    Child2Component,
    Child3Component,
    Child4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // CommunicationModule
    InputOutputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
