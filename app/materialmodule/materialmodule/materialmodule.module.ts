import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerDottedComponent, SpinnerDottedModule } from 'spinners-angular/spinner-dotted';



const Material = [
  SpinnerDottedModule
];

@NgModule({
  declarations: [],
  imports: [
    Material
  ],
  exports:[
    Material
  ]
})
export class MaterialmoduleModule { }
