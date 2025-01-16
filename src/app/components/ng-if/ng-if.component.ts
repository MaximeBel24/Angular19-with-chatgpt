import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ng-if',
  imports: [CommonModule, FormsModule],
  templateUrl: './ng-if.component.html',
  styleUrl: './ng-if.component.css'
})
export class NgIfComponent {

  isConnected: boolean = true;

  isAdmin: boolean = false;

  adminTrue() {
    this.isAdmin = true;
  }
  adminFalse() {
    this.isAdmin = false;
  }

  data:any = {
    isActive : false,

  }

  activeTrue() {
    this.data.isActive = true;
    console.log(this.data.isActive);
  }
  activeFalse() {
    this.data.isActive = false;
    console.log(this.data.isActive);
  }

  articles: string[] = [
    'Dentifrice',
    'Viande',
    'Eau'
  ];
  newArticle: string = '';

  addArticle() {
    if (this.newArticle.trim() !== '') { // Vérifie que l'input n'est pas vide
      this.articles.push(this.newArticle.trim());
      this.newArticle = ''; // Réinitialise le champ
    } else {
      alert('Veuillez entrer un article valide.');
    }
  }

  removeArticle() {
    this.articles.pop();
  }

}