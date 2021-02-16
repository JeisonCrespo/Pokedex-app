import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DetailsPageRoutingModule } from './details-routing.module';

import { DetailsPage } from './details.page';
import { KeysPipe } from '../core/pipes/keys.pipe';
import { TypeDefencesPipe } from '../core/pipes/type-defences.pipe';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, DetailsPageRoutingModule],
  declarations: [DetailsPage, KeysPipe, TypeDefencesPipe],
})
export class DetailsPageModule {}