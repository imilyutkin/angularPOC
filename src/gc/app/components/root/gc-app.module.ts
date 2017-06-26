import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { GCAppComponent } from './gc-app.component';

@NgModule({
  bootstrap: [ GCAppComponent ],
  declarations: [
    GCAppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
  ]
})
export class GCAppModule { }
