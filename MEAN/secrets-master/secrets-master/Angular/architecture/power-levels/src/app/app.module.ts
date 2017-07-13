import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PowerComponent } from './power/power.component';
import { HumComponent } from './power/hum/hum.component';
import { HumanComponent } from './power/human/human.component';
import { SaiyanComponent } from './power/saiyan/saiyan.component';
import { SupersaiyanComponent } from './power/supersaiyan/supersaiyan.component';
import { SupersaiyantwoComponent } from './power/supersaiyantwo/supersaiyantwo.component';

@NgModule({
  declarations: [
    AppComponent,
    PowerComponent,
    HumComponent,
    HumanComponent,
    SaiyanComponent,
    SupersaiyanComponent,
    SupersaiyantwoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
