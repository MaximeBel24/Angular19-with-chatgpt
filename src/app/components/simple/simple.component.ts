import { Component } from '@angular/core';

@Component({
  selector: 'app-simple',
  imports: [],
  templateUrl: './simple.component.html',
  styleUrl: './simple.component.css'
})
export class SimpleComponent {

  messageToConsole(){
    console.log("Message envoyer à la console")
  }

}
