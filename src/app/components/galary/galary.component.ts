import { Component } from '@angular/core';

@Component({
  selector: 'app-galary',
  templateUrl: './galary.component.html',
  styleUrls: ['./galary.component.css']
})
export class GalaryComponent {
  galaryImages:{title:string, imgUrl: string, description: string}[]=[
    {
      title:'image 1',
      imgUrl:'https://images.pexels.com/photos/2079246/pexels-photo-2079246.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore fugiat autem fuga unde, cumque molestiae. Mollitia, eius! Sed molestias placeat earum repellat nulla consectetur quibusdam, quis illo velit! Esse, molestiae?'
    },
    {
      title:'image 2',
      imgUrl:'https://media.istockphoto.com/id/1293762741/photo/modern-living-room-interior-3d-render.jpg?s=612x612&w=0&k=20&c=iZ561ZIXOtPYGSzqlKUnLrliorreOYVz1pzu8WJmrnc=',
      description: 'Labore fugiat autem fuga unde, cumque molestiae. Mollitia, eius! Sed molestias placeat earum repellat nulla consectetur quibusdam, quis illo velit! Esse, molestiae?'
    },
    {
      title:'image 3',
      imgUrl:'https://media.istockphoto.com/id/1415968454/photo/modern-style-conceptual-interior-room-3d-illustration.jpg?s=612x612&w=0&k=20&c=A9VLFpwQcWUsC_9T5gklTSjvHpxpB2anvJfY7kLkvFs=',
      description: 'Lorem ipsum labore fugiat autem fuga unde, cumque molestiae. Mollitia, eius! Sed molestias placeat earum repellat nulla consectetur quibusdam, quis illo velit! Esse, molestiae?'
    },
    {
      title:'image 4',
      imgUrl:'https://images.pexels.com/photos/2959595/pexels-photo-2959595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore fugiatcumque molestiae.Sed molestias placeat earum repellat nulla consectetur quibusdam, quis illo velit! Esse, molestiae?'
    },
    {
      title:'image 5',
      imgUrl:'https://images.pexels.com/photos/3255245/pexels-photo-3255245.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore fugiat autem fuga unde, cumque molestiae. Mollitia, eius!'
    },
];
title:string = this.galaryImages[0].title;
imgUrl:string = this.galaryImages[0].imgUrl;
description:string = this.galaryImages[0].description;
index:number = 0;

seeMore(){
if(this.index >= this.galaryImages.length-1){
  this.index = -1;
}
this.index++;
this.title = this.galaryImages[this.index].title;
this.imgUrl = this.galaryImages[this.index].imgUrl;
this.description = this.galaryImages[this.index].description;

}

}
