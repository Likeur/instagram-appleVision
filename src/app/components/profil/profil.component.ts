import { Component, OnInit, inject } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-profil',
  standalone: true,
  imports: [],
  templateUrl: './profil.component.html',
})
export class ProfilComponent implements OnInit {



  ngOnInit(): void {
    
  }

  openPosttl = gsap.timeline({
    defaults:{
      duration:1,
      ease:'power4.inOut'
    }
  })

  
  openPost(){
    this.openPosttl.to('#main_box',{
      scale:0.5,
    }).to('#viewpostBoxewrapper',{
      display:'grid'
    }, "<").to('#viewpostBoxe',{
      scale:1
    }, "<")
  }
}
