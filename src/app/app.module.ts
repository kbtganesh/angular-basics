import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CastComponent } from './cast/cast.component';
import { CastDetailsComponent } from './cast-detail/cast-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    CastComponent,
    CastDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
