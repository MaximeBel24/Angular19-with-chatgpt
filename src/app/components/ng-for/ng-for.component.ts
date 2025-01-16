import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ng-for',
  imports: [CommonModule, FormsModule],
  templateUrl: './ng-for.component.html',
  styleUrl: './ng-for.component.css'
})
export class NgForComponent {

  prenoms: string[] = [
    "Maxime",
    "Pierre",
    "Lucas"
  ]

  newPrenom: string = '';

  addPrenom() {
    if (this.newPrenom.trim() !== '') {
      this.prenoms.push(this.newPrenom.trim());
      this.newPrenom = '';
    } else {
      alert('Veuillez entrer un prénom valide.');
    }
  }

  noms: string[] = [
    "Belin",
    "Buée",
    "De Riv"
  ]

  newName: string = '';

  addName() {
    if (this.newName.trim() !== '') {
      this.noms.push(this.newName.trim());
      this.newName = '';
    } else {
      alert('Veuillez entrer un nom valide.');
    }
  }

  numberArray: number[] = [1, 2, 3, 4, 5];

  products = [
    { id: 1, name: 'Laptop', price: 1500 },
    { id: 2, name: 'Phone', price: 800 },
    { id: 3, name: 'Tablet', price: 600 }
  ];

    // Fonction trackBy
    trackByProductId(index: number, product: any): number {
      return product.id; // Utilise l'ID unique pour suivre chaque produit
    }
  
    // Ajouter un nouveau produit
    addProduct() {
      const newProduct = {
        id: this.products.length + 1,
        name: `New Product ${this.products.length + 1}`,
        price: Math.floor(Math.random() * 1000) + 500
      };
      this.products.push(newProduct);
    }
  
    // Modifier le nom du premier produit
    updateFirstProduct() {
      if (this.products.length > 0) {
        this.products[0].name = 'Updated Laptop';
      }
    }
  
    // Supprimer le dernier produit
    removeLastProduct() {
      this.products.pop();
    }

}
