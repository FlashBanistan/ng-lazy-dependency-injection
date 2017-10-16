import { Component } from '@angular/core';

import { LazyService } from './lazy.service';

@Component({
  selector: 'app-lazy-one',
  template: `
    <h1>Lazy One</h1>
    <button (click)="incrementCounter()">{{ getCounter() }}</button>
  `,
  styles: [``],
})
export class LazyOneComponent {

  constructor(
    private lazyService: LazyService,
  ) { }

  getCounter() {
    return this.lazyService.getCounter();
  }

  incrementCounter() {
      return this.lazyService.incrementCounter();
  }

}
