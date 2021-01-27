import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { ComponentepopComponent } from 'src/app/componentes/componentepop/componentepop.component';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {

  constructor(private popoverController: PopoverController) { }

  ngOnInit() {
  }

  async presentPopover() {
    const popover = await this.popoverController.create({
      component: ComponentepopComponent,
      cssClass: 'my-custom-class',
      //event: ev,
      translucent: true
    });
    return await popover.present();
  }

}
