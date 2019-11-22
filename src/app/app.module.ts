import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {  DetailsFieldsComponent } from './details-fields/details-fields.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule ],
  declarations: [ AppComponent, DetailsFieldsComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

