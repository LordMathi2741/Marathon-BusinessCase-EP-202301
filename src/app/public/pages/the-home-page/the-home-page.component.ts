import {Component} from '@angular/core';
import {WinnerCardComponent} from "../../components/winner-card/winner-card.component";

@Component({
  selector: 'the-home-page',
  standalone: true,
  imports: [
    WinnerCardComponent
  ],
  templateUrl: './the-home-page.component.html',
  styleUrl: './the-home-page.component.css'
})
export class TheHomePageComponent  {

}
