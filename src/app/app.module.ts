import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LayoutModule} from "./components/UI/layout/layout.module";
import { PhonesComponent } from './components/screens/phones/phones.component';
import { LaptopsComponent } from './components/screens/laptops/laptops.component';
import { GamingComponent } from './components/screens/gaming/gaming.component';
import { AudioComponent } from './components/screens/audio/audio.component';
import { GadgetsComponent } from './components/screens/gadgets/gadgets.component';
import {HomeModule} from "./components/screens/home/home.module";
import {HeaderModule} from "./components/UI/layout/header/header.module";
import {HttpClientModule} from "@angular/common/http";
import {PhonesService} from "./services/phones.service";
import {LaptopsService} from "./services/laptops.service";


@NgModule({
  declarations: [
    AppComponent,
    PhonesComponent,
    LaptopsComponent,
    GamingComponent,
    AudioComponent,
    GadgetsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    LayoutModule,
    HomeModule,
    HeaderModule
  ],
  providers: [PhonesService, LaptopsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
