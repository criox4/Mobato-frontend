import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddMobileComponent } from './add-mobile/add-mobile.component';
import { ViewMobileComponent } from './view-mobile/view-mobile.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddMobileComponent,
    ViewMobileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
