import { Injectable } from '@angular/core';

@Injectable()
export class LazyService {

    private counter = 0;

    constructor() {
          console.log('Lazy Service Initting');
    }

    getCounter() {
        return this.counter;
    }

    incrementCounter() {
        return this.counter++;
    }


}
