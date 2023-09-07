import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent, IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { ListServicesService } from '../list-services.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    HttpClientModule,
  ],
  providers: [ListServicesService],
  declarations: [HomePage],
})
export class HomePageModule {}
