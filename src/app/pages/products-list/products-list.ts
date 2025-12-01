import { Component,signal } from '@angular/core';
import { Product } from '../../models/products.models';
import { ProductCard } from '../product-card/product-card';

@Component({
  selector: 'app-products-list',
  imports: [ProductCard],
  template: `
  <div class="p-8 grid grid-cols-2">
    @for (product of products(); track product.id) {
    <app-product-card [product]="product" />
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
      image: 'https://www.voylla.com/cdn/shop/files/PCJAI70942_CS.jpg',
      price: 100,
      stock: 10  
    },
    {
      id:2,
      title: 'Mens Brass Bracelet',
      image: 'https://www.voylla.com/cdn/shop/files/EUCCU20882_CS.jpg',
      price: 200,
      stock: 20
    },
    
  ]);
}
