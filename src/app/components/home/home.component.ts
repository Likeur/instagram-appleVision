import { Component, OnInit } from '@angular/core';
import { ProfilComponent } from '../profil/profil.component';
import { Draggable } from "gsap/Draggable";
import gsap from 'gsap';
import { MessageListComponent } from '../message-list/message-list.component';
import { MessageViewComponent } from '../message-view/message-view.component';

gsap.registerPlugin(Draggable)
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProfilComponent, MessageListComponent, MessageViewComponent],
  templateUrl: './home.component.html',
})
export default class HomeComponent implements OnInit {

  imgLink = '../../../assets/img/fond2.jpg'

  isLikeClicked = false
  isBookMarkCliked = false
  numberOfLike = 1232

  ngOnInit(): void {
   Draggable.create('#storiesBox', {
      inertia: true,
      type: 'x', 
    });

    gsap.set('#viewpostBoxe',{
      scale:0
    })

    gsap.set('#viewpostBoxewrapper',{
      display:'none'
    })
  }
  likeClicked(){
    this.isLikeClicked = !this.isLikeClicked

    const likeTl = gsap.timeline({
      defaults:{
        duration:1,
        ease:'power4.inOut'
      }
    })

    likeTl.to('.likeRed',{
      scale: 1,
      stagger:0.2
    }).to('.likeRed',{
      y:30,
      opacity:0,
      scale:0
    })

    likeTl.paused()

    if(this.isLikeClicked){
      likeTl.play()

      this.numberOfLike += 1
    }else if(!this.isLikeClicked){
      this.numberOfLike -=1
      likeTl.restart()
    }
    
  }
  bookmarkClicked(){
    this.isBookMarkCliked = !this.isBookMarkCliked
  }

  closeBox(){
    const closeTl  = gsap.timeline({
      defaults:{
        duration:1,
        ease:'power4.inOut'
      }
    })

    closeTl.to('#main_box',{
      scale:1,
    }).to('#viewpostBoxewrapper',{
      display:'none'
    }, "<").to('#viewpostBoxe',{
      scale:0
    }, "<")
  }


  closeProfileBox(){
    gsap.to('#profilBox',{
      x:60,
      opacity:0,
      display:'none'
    })
  }

  openProfileBox(){
    gsap.to('#profilBox',{
      x:0,
      opacity:1,
      display:'block'
    })
  }

  closemessageList(){
    
  }
}
