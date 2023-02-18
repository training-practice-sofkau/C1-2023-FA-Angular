import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss']
})
export class WelcomePageComponent {

  sofkaULogo = "https://ik.imagekit.io/lvh0tltbeph/SofkaU/logo-sofkau_1Fn3uH-1S.png";
  agileLogo = "./assets/training-leagues/agile.png"
  devLogo = "./assets/training-leagues/development.png"
  qaLogo = "./assets/training-leagues/qa.png"
}
