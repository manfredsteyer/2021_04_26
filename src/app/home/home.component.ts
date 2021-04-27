import { Component, OnInit } from '@angular/core';
import { Flight } from '../flight-booking/flight';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    // Eigenschaft hinzufügen
    flights: Flight[] = [
      { id: 1, from: 'Hamburg', to: 'Berlin', date: '2025-02-01T17:00+01:00' },
      { id: 2, from: 'Hamburg', to: 'Frankfurt', date: '2025-02-01T17:30+01:00' },
      { id: 3, from: 'Hamburg', to: 'Mallorca', date: '2025-02-01T17:45+01:00' }
    ];

  constructor() { }

  ngOnInit(): void {
  }

  deleteAll(): void {
    console.log('deleteAll -- this feature is only available in the commercial version!');
  }

}
