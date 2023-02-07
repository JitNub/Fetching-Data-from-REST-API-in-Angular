import { Component } from '@angular/core';
import { tap } from 'rxjs';
import { MyDataService } from 'src/app/services/my-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  myData: any;
  myData$: any;
  constructor(private myDataService: MyDataService) {
    this.myData$ = this.myDataService
      .getData()
      .pipe(tap((data) => (this.myData = data)));
  }
}
