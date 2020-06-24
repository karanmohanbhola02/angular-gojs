import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { GojsAngularModule } from 'gojs-angular';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GojsAngularModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
