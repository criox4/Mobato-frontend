import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

interface Mobile {
  brand: string;
  price: number;
  color: string;
  storage: number;
  description: string;
  model: string;
}

@Component({
  selector: 'app-view-mobile',
  templateUrl: './view-mobile.component.html',
  styleUrls: ['./view-mobile.component.css']
})
export class ViewMobileComponent implements OnInit {
  mobiles: Mobile[] = [];
  errorMessage: string = '';

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.appService.viewMobile().subscribe(
      (data: Mobile[]) => {
        this.mobiles = data;
      },
      (error) => {
        this.errorMessage = 'Failed to load mobile data. Please try again later.';
      }
    );
  }
}
