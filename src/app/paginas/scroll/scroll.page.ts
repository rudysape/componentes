import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-scroll',
  templateUrl: './scroll.page.html',
  styleUrls: ['./scroll.page.scss'],
})

export class ScrollPage implements OnInit {

  dato:any[]=Array(20);
  @ViewChild(IonInfiniteScroll) infiniteScroll:IonInfiniteScroll //para permitir ver como esta el infinite scroll

  constructor() { }

  ngOnInit() {
  }

  loadData(evento){
    //console.log(evento);

    if (this.dato.length>50){
        this.infiniteScroll.complete;
        this.infiniteScroll.disabled = true;
        return

    }
    setTimeout(() => {
      const nuevodato:any[]=Array(20);
      this.dato.push(...nuevodato);
      evento.target.complete();
    }, 2000);


  }

}
