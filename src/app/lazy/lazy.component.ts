import { Component } from '@angular/core';

import { LazyService } from './lazy.service';

@Component({
  selector: 'app-lazy',
  template: `
    <app-lazy-one></app-lazy-one>
    <app-lazy-two></app-lazy-two>

    <router-outlet></router-outlet>
  `,
  styles: [``]
})
export class LazyComponent {

  constructor(
    private lazyService: LazyService,
  ) { }

}
