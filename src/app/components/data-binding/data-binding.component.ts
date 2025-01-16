import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
  firstName: string = "Max";

  namePlaceholder: string = "Enter your name";

  imgUrl: string = "url de l'image";
  imgName: string = "nom de l'image";

  envoyerMessage() {
    console.log("Message envoyé");
  }

  prenom: string = "";

  message: string = "";

  alertMessage() {
    alert(this.message);
    this.message = "";
  }

}
