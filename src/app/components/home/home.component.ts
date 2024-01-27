import { Component } from '@angular/core';
import { ProfilComponent } from '../profil/profil.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProfilComponent],
  templateUrl: './home.component.html',
})
export default class HomeComponent {

  imgLink = '../../../assets/img/fond2.jpg'

  isLikeClicked = false
  isBookMarkCliked = false

  likeClicked(){
    this.isLikeClicked = !this.isLikeClicked
  }
  bookmarkClicked(){
    this.isBookMarkCliked = !this.isBookMarkCliked
  }
}
