import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IonList } from '@ionic/angular';
import { Observable } from 'rxjs';
import { DaaService } from '../../service/daa.service';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.page.html',
  styleUrls: ['./listas.page.scss'],
})
export class ListasPage implements OnInit {
  usuarios: Observable<any>
  @ViewChild ('unaentrada', {read:ElementRef, static:false}) ionList:ElementRef;   // para acceder al Ionlist del listas.page.html

  constructor(private dataservice: DaaService) {  //tenia que decir DataService

  }

  ngOnInit() {
      
      this.usuarios = this.dataservice.getUsuarios();
  }

  favorito(usuario){
    console.log(usuario);
    //this.ionList.closeSlidingItems();
    this.ionList.nativeElement.closeSlidingItems();
  }

  compartir(usuario){
    console.log(usuario);
    this.ionList.nativeElement.closeSlidingItems();

  }
  eliminar(usuario){
    console.log(usuario);
    this.ionList.nativeElement.closeSlidingItems();
  }

}
