import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check',
  templateUrl: './check.page.html',
  styleUrls: ['./check.page.scss'],
})
export class CheckPage implements OnInit {
  datos=[
    {
      nombre:"primary",
      selector:true
    },
    {
      nombre:"secondary",
      selector:false
    },
    {
      nombre:"tertiary",
      selector:true
    },
    {
      nombre:"warning",
      selector:false
    },
  ]

  datosb=[
    {
      nombre:"danger",
      selector:true
    },
    {
      nombre:"success",
      selector:false
    },
    {
      nombre:"tertiary",
      selector:true
    },
    {
      nombre:"warning",
      selector:false
    },
  ]

  constructor() { }

  ngOnInit() {
  }
  onClick(){
    console.log(this.datosb);
  }

}
