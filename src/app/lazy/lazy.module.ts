import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LazyComponent } from './lazy.component';
import { LazyOneComponent } from './lazy-one.component';
import { LazyTwoComponent } from './lazy-two.component';
import { LazyService } from './lazy.service';


const routes: Routes = [
    { path: '', component: LazyComponent, children: [
      { path: 'one', component: LazyOneComponent }
    ]},

];

@NgModule({
  declarations: [
    LazyComponent,
    LazyOneComponent,
    LazyTwoComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ],
  providers: [LazyService],
})
export class LazyModule { }
