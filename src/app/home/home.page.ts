import { Component } from '@angular/core';
import { FormEntity } from '../_common/entities/form.entity';
import { ModalController } from '@ionic/angular';
import { ResultsComponent } from './components/results/results.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private modal: ModalController) {}

  async doShowResults(results: FormEntity) {
    const modal = await this.modal.create({
      component: ResultsComponent,
      componentProps: { results },
      cssClass: 'custom-modal'
    });
    await modal.present();
  }

}
