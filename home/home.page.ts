import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import {InscriptionPage} from '../inscription/inscription.page';
import {ConnectionPage} from '../connection/connection.page';
import {AdminInscrirePage} from '../admin-inscrire/admin-inscrire.page';
import { ConnectionPage } from './connection/connection.page';
import { AdminInscrirePage } from './admin-inscrire/admin-inscrire.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

constructor(public navCtrl: NavController) {

}

onGoToInscrire() {
this.navCtrl.push(InscriptionPage);
}

onGoToConnecter() {
this.navCtrl.push(ConnectionPage);
}

onGoToAdminInscrire() {
this.navCtrl.push(AdminInscrirePage);
}


}
