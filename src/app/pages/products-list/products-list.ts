import { Component,signal } from '@angular/core';
import { Product } from '../../models/products.models';

@Component({
  selector: 'app-products-list',
  imports: [],
  template: `
  <div class="p-8 grid grid-cols-2">
    @for (product of products(); track product.id) {
    <div class="flex flex-col justify-between">  
      <div>{{ product.title }}</div>
      <div>{{ product.price }}</div>
    </div>
    }
  </div>
  `,
  styles: ``,
})
export class ProductsList {
  products = signal<Product[]>([
    {
      id:1,
      title: 'Diamond Necklace',
      image: 'https://via.placeholder.com/150',
      price: 100,
      stock: 10  
    },
    {
      id:2,
      title: 'Mens Brass Bracelet',
      image: 'https://via.placeholder.com/150',
      price: 200,
      stock: 20
    },
    
  ]);
}
