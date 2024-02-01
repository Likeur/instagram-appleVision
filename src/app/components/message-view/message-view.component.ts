import { Component } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-message-view',
  standalone: true,
  imports: [],
  templateUrl: './message-view.component.html',
  styles: ``
})
export class MessageViewComponent {

  closemessageBox(){
    const closeTl  = gsap.timeline({
      defaults:{
        duration:1,
        ease:'power4.inOut'
      }
    })

    closeTl.to('#main_box',{
      scale:1,
    }).to('#viewmessageBoxewrapper',{
      display:'none'
    }, "<").to('#viewmessageBoxe',{
      scale:0
    }, "<")
  }
}
