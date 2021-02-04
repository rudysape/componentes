import { StringMap } from '@angular/compiler/src/compiler_facade_interface';
import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Componente } from '../../interfaces/interfaces';
import { DaaService } from '../../service/daa.service';
/* Creo una interface para usarla como elementos del menu */


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})

export class InicioPage implements OnInit {
  /* Declaro un componenete del tipo componente */
  componente:Observable<Componente[]>


  constructor(private DataService:DaaService, private menuController:MenuController) { }

  ngOnInit() {
      this.componente = this.DataService.getMenu();

  }

onClick(){

  this.menuController.open('first');
}

}
