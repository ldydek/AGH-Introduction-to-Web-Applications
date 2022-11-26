import { Component } from '@angular/core';

@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.css']
})
export class ActorComponent {
  imie:string = ""
  nazwisko:string = ""
  tytul:string = ""
  window = window.location.href;
  a = 2 + 3;
}
