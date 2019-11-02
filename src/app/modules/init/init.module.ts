import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InitComponent } from './init.component';

@NgModule({
  declarations: [InitComponent],
  imports: [
    CommonModule
  ],
  exports:[
    InitComponent
  ]
})
export class InitModule { }
