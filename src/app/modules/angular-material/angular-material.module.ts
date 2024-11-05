import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';

const angularMaterial=[MatButtonModule,MatIconModule,MatDividerModule]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    angularMaterial
  ],
  exports:[
    angularMaterial
  ]
})
export class AngularMaterialModule { }
