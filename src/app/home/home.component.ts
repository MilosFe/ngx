import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { HotelsService } from '@app/services/hotels/hotels.service';
import { Hotels } from './../models/hotel.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  quote: string;
  isLoading: boolean;
  hotels: Hotels;

  constructor(private hotelsService: HotelsService) {}

  ngOnInit() {}

  loadHotels() {
    this.isLoading = true;
    this.hotelsService
      .getHotels()
      .pipe(
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe(
        (hotels: Hotels) => {
          this.hotels = hotels;
        },
        error => {
          // this would be custom logger sending server an error
          console.log('Error', error);
        }
      );
  }
}
