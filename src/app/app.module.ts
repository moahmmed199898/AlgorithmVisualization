import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BubbleSortComponent } from "./bubble-sort/bubble-sort.component";
import { CodeAreaComponent } from "./code-area/code-area.component";
import { IndexComponent } from "./index/index.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {MatSliderModule} from "@angular/material/slider";
import {MatButtonModule} from '@angular/material/button';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    BubbleSortComponent,
    CodeAreaComponent,
    IndexComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
