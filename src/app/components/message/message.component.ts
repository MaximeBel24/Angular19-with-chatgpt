import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-message',
  imports: [FormsModule],
  templateUrl: './message.component.html',
  styleUrl: './message.component.css'
})
export class MessageComponent {

  message: string = ""

  sendMessage() {
    if (this.message.trim()) {
      alert(this.message);
      this.message = "";
    } else {
      alert("Le message ne peut pas être vide !");
    }
  }
  

  
}
