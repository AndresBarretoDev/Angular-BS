import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoxContentComponent } from './box-content/box-content.component';
import { AddressFormComponent } from './address-form/address-form.component';
import { ResumeCartComponent } from './resume-cart/resume-cart.component';
import { ResumeListComponent } from './resume-list/resume-list.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [BoxContentComponent, AddressFormComponent, ResumeCartComponent, ResumeListComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[BoxContentComponent,AddressFormComponent,ResumeCartComponent,ResumeListComponent]
})
export class ComponentsModule { }
