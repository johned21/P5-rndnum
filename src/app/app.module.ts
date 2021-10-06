import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RndNumbersComponent } from './rnd-numbers/rnd-numbers.component';

@NgModule({
  declarations: [
    AppComponent,
    RndNumbersComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
