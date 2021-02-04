import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-poverinfo',
  templateUrl: './poverinfo.component.html',
  styleUrls: ['./poverinfo.component.scss'],
})
export class PoverinfoComponent implements OnInit {
items=Array(10);


  constructor(private popOver:PopoverController) { }

  ngOnInit() {}

  onClick(valor){
      this.popOver.dismiss({
         valor : valor}

      );

  }

}
