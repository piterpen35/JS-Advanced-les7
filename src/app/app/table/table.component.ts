import { Component, OnInit } from '@angular/core';
import { ArrServiceService } from '../arr-service.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  providers: [ArrServiceService]
})
export class TableComponent implements OnInit {
  constructor(public arrServiceService: ArrServiceService) { };
  getStyles(i: any): any {
    let currentDate = new Date();
    let ms = this.arrServiceService.arr[i].expirationDate.exDate.getTime() - currentDate.getTime();
    let days = Math.round(ms / (3600 * 1000 * 24));
    let styles = {};
    if (days <= 2 && days >= 0) {
      styles = {
        'background-color': 'yellow'
      };
      return styles;
    }
    if (days < 0) {
      styles = {
        'background-color': 'red'
      };
      return styles;
    }
  }
  ngOnInit(): void { }
}
