import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  imports: [FormsModule, CommonModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {

  userName: string = 'Max';
  userAvatar: string = 'assets/default-avatar.jpg';

  products: string[] = [
    "Viande",
    "Eau",
    "Shampoing"
  ]

  newProduct: string = "";

  userGreeting(){
    alert('Bonjour ' + this.userName)
    this.userName = '';
  }

  addProduct() {
    if (this.newProduct.trim()) {
      this.products.push(this.newProduct.trim());
      this.newProduct = '';
    }
  }
  

  deleteSpecificProduct(product: string) {
    if (confirm('Voulez-vous vraiment supprimer ce produit ?')) {
      this.products = this.products.filter(p => p !== product);
    }
  }
  
}
