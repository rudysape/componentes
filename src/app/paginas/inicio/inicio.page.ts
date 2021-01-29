import { StringMap } from '@angular/compiler/src/compiler_facade_interface';
import { Component, OnInit } from '@angular/core';

/* Creo una interface para usarla como elementos del menu */
interface Componente{
  icono:string;
  nombre: string;
  direccion: string;

}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})

export class InicioPage implements OnInit {
  /* Declaro un componenete del tipo componente */
  componente:Componente[]=[
    {
      icono: 'person',
      nombre: 'Action Sheet',
      direccion:'/action-sheet'
    },

    {
      icono: 'pricetag',
      nombre: 'Alert',
      direccion:'/alert'
    },
    {
      icono: 'bicycle-outline',
      nombre: 'Fab',
      direccion:'/fab'
    },
    {
      icono: 'bug-outline',
      nombre: 'DateTime',
      direccion:'/datetime'
    },
    {
      icono: 'albums-outline',
      nombre: 'Botones',
      direccion:'/buttons'
    },
    {
      icono: 'accessibility-outline',
      nombre: 'Avatar',
      direccion:'/avatar'
    },
    {
      icono: 'attach-outline',
      nombre: 'Cards',
      direccion:'/cards'
    },
    {
      icono: 'layers-outline',
      nombre: 'Slides',
      direccion:'/slides'
    },
    {
      icono: 'layers-outline',
      nombre: 'Check',
      direccion:'/check'
    },
    {
      icono: 'calculator-outline',
      nombre: 'Grid',
      direccion:'/grid'
    },
    {
      icono: 'bulb-outline',
      nombre: 'PopOver',
      direccion:'/popover'
    },
    {
      icono: 'bug-outline',
      nombre: 'Toast',
      direccion:'/toast'
    },
    {
      icono: 'chatbox-ellipses-outline',
      nombre: 'Input',
      direccion:'/input'
    },

    {
      icono: 'infinite-outline',
      nombre: 'Infinite Scroll',
      direccion:'/scroll'
    },



  ]


  constructor() { }

  ngOnInit() {
  }

}
