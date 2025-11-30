import { Component, signal } from '@angular/core';
import { PrimaryButton } from '../primary-button/primary-button';

@Component({
  selector: 'app-header',
  imports: [PrimaryButton],
  template: `
    <div class="bg-slate-100 px-4 py-3 shadow-md">
      <span>My Store</span>
      <app-primary-button/>
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
}
