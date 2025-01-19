import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dynamic-list',
  imports: [FormsModule, CommonModule],
  templateUrl: './dynamic-list.component.html',
  styleUrl: './dynamic-list.component.css'
})
export class DynamicListComponent {

  items: string[] = [];
  newItem: string = "";
  maxItems: number = 10;

  addItem() {
    if (this.items.length < this.maxItems) {
      if (this.newItem.trim()) {
        if (!this.items.includes(this.newItem.trim())) {
          this.items.push(this.newItem.trim());
          this.newItem = "";
        } else {
          alert("L'élément existe déjà dans la liste !");
        }
      } else {
        alert("L'élément ne peut pas être vide !");
      }
    } else {
      alert("La liste a atteint sa capacité maximale !");
    }
  }
  

  removeItem(index: number) {
    const confirmDelete = confirm(`Voulez-vous vraiment supprimer "${this.items[index]}" ?`);
    if (confirmDelete) {
      this.items.splice(index, 1);
    }
  }
  

}
