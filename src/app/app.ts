import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Header} from './components/header/header';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Header],
  template: `
    <h1>Welcome to {{ title() }}!</h1>
    <app-header />

  `,
  styles: ``,
})

export class App {
  protected readonly title = signal('angular-ecomm');
}
