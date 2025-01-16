import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  imports: [CommonModule],
  templateUrl: './ng-for.component.html',
  styleUrl: './ng-for.component.css'
})
export class NgForComponent {

  prenom: string[] = [
    "Maxime",
    "Pierre",
    "Lucas"
  ]

  newPrenom: string = '';

  addPrenom() {
    if (this.newPrenom.trim() !== '') {
      this.prenom.push(this.newPrenom.trim());
      this.newPrenom = '';
    } else {
      alert('Veuillez entrer un prénom valide.');
    }
  }

}
