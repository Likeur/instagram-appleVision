import { Component } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-message-list',
  standalone: true,
  imports: [],
  templateUrl: './message-list.component.html',
})
export class MessageListComponent {

  openPosttl = gsap.timeline({
    defaults:{
      duration:1,
      ease:'power4.inOut'
    }
  })

  openMessageview(){
    this.openPosttl.to('#main_box',{
      scale:0.5,
    }).to('#viewmessageBoxewrapper',{
      display:'grid'
    }, "<").to('#viewmessageBoxe',{
      scale:1
    }, "<")
  }
}
