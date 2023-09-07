import { Component, OnInit, ViewChild } from '@angular/core';
import { ListServicesService } from '../list-services.service';
// import { IonContent, IonInfiniteScroll } from '@ionic/angular';
import { InfiniteScrollCustomEvent, IonContent } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  jsonData: any[] = [];
  index: any = 0;
  data: any;
  loadingItem: any = 8;

  constructor(private listService: ListServicesService) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.listService.getJsonData().subscribe((data) => {
      for (this.index = 0; this.index < this.loadingItem; this.index++) {
        this.data = data;
        console.log(this.data);
        this.jsonData.push(data.items[this.index]);
      }
      console.log(this.jsonData, 'rahul');
    });
  }

  loadMoreData(event: any) {
    if (this.data.items.length === 0) {
      // No more data to load
      event.target.complete();
    } else {
      console.log(this.index, this.loadingItem + 8);
      if (this.index + 1 < this.data?.items?.length) {
        for (this.index; this.index < this.loadingItem + 8; this.index++) {
          this.jsonData.push(this.data.items[this.index]);
        }
        console.log(this.jsonData, 'gupta');
      }
      this.loadingItem = this.loadingItem + 8;
      // console.log(this.jsonData);
      event.target.complete();
      console.log(this.jsonData)
    }
  }
}
