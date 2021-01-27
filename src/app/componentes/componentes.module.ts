import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { ComponentepopComponent } from './componentepop/componentepop.component';

@NgModule({
  declarations: [
    HeaderComponent,
    IonicModule,
    ComponentepopComponent
  ],
  exports:[
    HeaderComponent,
    ComponentepopComponent
  ],
  imports: [
    CommonModule, IonicModule
  ]
})
export class ComponentesModule { }
