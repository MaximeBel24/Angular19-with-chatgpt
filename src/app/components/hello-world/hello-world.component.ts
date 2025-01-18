import { Component } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  imports: [],
  templateUrl: './hello-world.component.html',
  styleUrl: './hello-world.component.css'
})
export class HelloWorldComponent {
  message: string = 'Bonjour tout le monde !';

  changeMessage() {
    this.message = 'Message changé !';
  }
}
