import { Injectable } from '@angular/core';
import { flight } from 'src/shared/models/flight';

@Injectable({ providedIn: 'root' })
export class HomeService {
  flights: flight[] = [
    {
      id: '1',
      Arriving: new Date( "2021-04-22 "),
      Departing: new Date( "2021-04-22 "),
      from: 'cairo',
      img: '../../../assets/images/dubai.jpg',
      price: 5000,
      to: 'Dubai',
      timeArriving:'15:00 pm',
      timeDeparting:'14:00 pm ',
      type: 'twoWay',
      flight_class:'Economy'
    },
    {
      id: '2',
      Arriving: new Date( "2021-04-23 "),
      Departing: new Date( "2021-04-23 "),
      from: 'cairo',
      img: '../../../assets/images/dammam.jpg',
      price: 5000,
      to: 'Dammam',
      timeArriving:'15:00 pm',
      timeDeparting:'14:00 pm ',
      type: 'twoWay',
      flight_class:'Economy'
    },
    {
      id: '3',
      Arriving: new Date("2021-04-24 "),
      Departing: new Date( "2021-04-24 "),
      from: 'cairo',
      img: '../../../assets/images/england.jpg',
      price: 5000,
      to: 'England',
      timeArriving:'15:00 pm',
      timeDeparting:'14:00 pm ',
      type: 'twoWay',
      flight_class:'Economy'
    },
    {
      id: '4',
      Arriving: new Date("2021-04-25 "),
      Departing:new Date( "2021-04-25 "),
      from: 'cairo',
      img: '../../../assets/images/sharm.jpg',
      price: 5000,
      to: 'SharmElsheikh',
      timeArriving:'15:00 pm',
      timeDeparting:'14:00 pm ',
      type: 'twoWay',
      flight_class:'Economy'

    },
    {
      id: '5',
      Arriving:new Date( "2021-04-26 "),
      Departing: new Date( "2021-04-26 "),
      from: 'cairo',
      img: '../../../assets/images/germany.jpg',
      price: 5000,
      to: 'Germany',
      timeArriving:'15:00 pm',
      timeDeparting:'14:00 pm ',
      type: 'twoWay',
      flight_class:'Economy'
    },
  ];
  constructor() {}

  get getFlights() {
    return [...this.flights];
  }

  getFlight(flightId: string) {
    return {
      ...this.flights.find((flight) => {
        return flight.id === flightId;
      }),
    };
  }
}
