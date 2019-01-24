import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BadgeModule } from '@collab-ui/angular';
import { IconModule } from '@collab-ui/angular';
import { SpinnerModule } from '@collab-ui/angular';
import { InputModule } from '@collab-ui/angular';
import { LoadingModule } from '@collab-ui/angular';
import { ButtonModule } from '@collab-ui/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlaygroundComponent } from './playground/playground.component';

@NgModule({
  declarations: [
    AppComponent,
    PlaygroundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BadgeModule,
    IconModule,
    SpinnerModule,
    InputModule
    ButtonModule,
    LoadingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
