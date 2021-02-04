import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { ComponentepopComponent } from './componentepop/componentepop.component';
import { PoverinfoComponent } from './poverinfo/poverinfo.component';

@NgModule({
  declarations: [
    HeaderComponent,
    IonicModule,
    ComponentepopComponent,
    PoverinfoComponent
  ],
  exports:[
    HeaderComponent,
    ComponentepopComponent,PoverinfoComponent
  ],
  imports: [
    CommonModule, IonicModule
  ]
})
export class ComponentesModule { }
