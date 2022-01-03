import { Component } from '@angular/core';
import { ArrServiceService } from './arr-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Main';
  constructor(svc: ArrServiceService) {
    svc.arr;
  }
}
