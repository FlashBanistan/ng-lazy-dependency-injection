import { Component } from '@angular/core';

import { LazyService } from './lazy.service';

@Component({
  selector: 'app-lazy-two',
  template: `
    <h1>Lazy Two</h1>
    <button (click)="incrementCounter()">{{ getCounter() }}</button>
  `,
  styles: [``],
})
export class LazyTwoComponent {

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
