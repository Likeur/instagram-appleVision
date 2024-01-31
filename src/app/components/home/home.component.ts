import { Component, OnInit } from '@angular/core';
import { ProfilComponent } from '../profil/profil.component';
import { Draggable } from "gsap/Draggable";
import gsap from 'gsap';

gsap.registerPlugin(Draggable)
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProfilComponent],
  templateUrl: './home.component.html',
})
export default class HomeComponent implements OnInit {

  imgLink = '../../../assets/img/fond2.jpg'

  isLikeClicked = false
  isBookMarkCliked = false

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
}
