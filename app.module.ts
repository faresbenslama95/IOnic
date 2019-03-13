
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomePage } from './home/home.page';
import { InscriptionPage } from './inscription/inscription.page';
import { ConnectionPage } from './connection/connection.page';
import { AdminInscrirePage } from './admin-inscrire/admin-inscrire.page';
@NgModule({
  declarations: [
    AppComponent,
    HomePage,
    InscriptionPage,
    ConnectionPage,
    AdminInscrirePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppComponent,
    HomePage,
    InscriptionPage,
    ConnectionPage,
    AdminInscrirePage

  ],

  entryComponents: [
    AppComponent,
    HomePage,
    ConnectionPage,
    AdminInscrirePage

  ],
  providers: [
    StatusBar,
    SplashScreen,
  { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ]
})
export class AppModule {}
