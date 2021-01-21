import { Component, OnInit } from '@angular/core';
interface avatar{
  icono:string;
  nombre:string;
}

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.page.html',
  styleUrls: ['./avatar.page.scss'],
})
export class AvatarPage implements OnInit {

  avatar:avatar[] =[
    {
      icono:"assets/img/homero.png",
      nombre:"Homero J Simpson"
    },
    {
      icono:"assets/img/bart.jfif",
      nombre:"Bartolomeo Simpson"
    },
    {
      icono:"assets/img/lisa.jfif",
      nombre:"Lisa Simpson"
    }

  ]
  constructor() { }

  ngOnInit() {
  }

}
