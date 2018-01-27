import { Injectable } from '@angular/core';

@Injectable()

export class DataService {

    cars = [
      'Ford', 'Chevrolet', 'Buick'
    ];

  constructor() { }


  myData() {
    return 'This is my data, man!';
  }

}
