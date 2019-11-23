import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router'
import { HttpClientModule } from '@angular/common/http';;

import { HomePage } from './home.page';
import { CommonComponentsModule } from '../_common/common.components.module';
import { FormComponent } from './components/form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ResultsComponent } from './components/results/results.component';
import { AdvertisingComponent } from './components/advertising/advertising.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    CommonComponentsModule,
    HttpClientModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [HomePage, FormComponent, ResultsComponent, AdvertisingComponent, CardComponent],
  entryComponents: [ResultsComponent]
})
export class HomePageModule {}
