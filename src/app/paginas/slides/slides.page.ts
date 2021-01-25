import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.page.html',
  styleUrls: ['./slides.page.scss'],
})
export class SlidesPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  slider = [
    {
      title:"ionic!",
      description :"El mejor framework para desarrollo de Aplicaciones Híbridas",
      image:"assets/wilster1.jpg"
    },
    {
      title:"Viva el Rojo!",
      description :"El mejor equipo de Cochabamba y de Bolivia entera",
      image:"assets/wilster2.jpg"
    },
    {
      title:"Tercer Slide",
      description :"Descripcion del 3er slide para las pruebas de la tarea",
      image:"assets/wilster3.jpg"
    },

  ]

  ngOnInit() {
  }

  onClick(){
    this.navCtrl.navigateBack('/');
  }

}
