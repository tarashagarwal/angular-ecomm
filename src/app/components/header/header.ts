import { Component, signal } from '@angular/core';
import { PrimaryButton } from '../primary-button/primary-button';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [PrimaryButton],
  template: `
    <div class="bg-slate-100 px-4 py-3 shadow-md flex justify-between">
      <span>My Store</span>
      <app-primary-button [label]="cart()" (btnClicked)="showButtonClicked()"/>
    </div>
  `,
  styles: `
  .header{
    background-color: rgba(0, 0, 0, 0.5);
    color: black;
    padding: 1rem;
  }
  `,
})

export class Header {
  title = signal('Angular Ecommerce');

  cart = signal('My Cart');

  showButtonClicked() {
    console.log('Button clicked');
  }
}
