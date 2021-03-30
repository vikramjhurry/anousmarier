import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProfileComponent } from './add-profile/add-profile.component';
import { ListingComponent } from './listing/listing.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';



@NgModule({
  declarations: [AddProfileComponent, ListingComponent, ViewProfileComponent],
  imports: [
    CommonModule
  ]
})
export class ProfilesModule { }
