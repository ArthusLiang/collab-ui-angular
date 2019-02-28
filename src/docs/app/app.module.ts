import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BadgeModule } from '@collab-ui/angular';
import { IconModule } from '@collab-ui/angular';
import { ListItemSectionModule } from '@collab-ui/angular';
import { SpinnerModule } from '@collab-ui/angular';
import { LoadingModule } from '@collab-ui/angular';
import { ButtonModule } from '@collab-ui/angular';

import { TabModule } from '@collab-ui/angular';
import { TabContentModule } from '@collab-ui/angular';
import { TabHeaderModule } from '@collab-ui/angular';
import { TabListModule } from '@collab-ui/angular';
import { TabPaneModule } from '@collab-ui/angular';
import { TabsModule } from '@collab-ui/angular';

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
    ListItemSectionModule,
    SpinnerModule,
    ButtonModule,
    LoadingModule,
    TabModule,
    TabContentModule,
    TabHeaderModule,
    TabListModule,
    TabPaneModule,
    TabsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }