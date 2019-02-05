import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BadgeModule } from '@collab-ui/angular';
import { IconModule } from '@collab-ui/angular';
import { SpinnerModule } from '@collab-ui/angular';
import { InputModule } from '@collab-ui/angular';
import { InputErrorModule } from '@collab-ui/angular';
import { LabelModule } from '@collab-ui/angular';
import { InputHelperModule } from '@collab-ui/angular';

import { FormsModule } from '@angular/forms';
import { InputDModule } from '@collab-ui/angular';
import { InputWrapperContainerModule } from '@collab-ui/angular';
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
    InputModule, //TODO: Remove
    InputErrorModule,
    LabelModule,

    InputDModule,
    InputWrapperContainerModule,

    FormsModule

    InputModule
    ButtonModule,
    LoadingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
