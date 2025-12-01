import { Component, input } from '@angular/core';
import { Product } from '../../models/products.models';

@Component({
  selector: 'app-product-card',
  imports: [],
  template: `
    <div class= "bg-white shadow-md border rounded-xl p-6 flex flex-col gap-6 relative">
      {{ product().title }}
      
      <img [src]="product().image" alt="Product Image" class="w-[200px] h-[100px] object-contain ">
    </div>
  `,
  styles: ``,
})
export class ProductCard {
  product = input.required<Product>();
}
