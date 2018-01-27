import { Injectable } from '@angular/core';

@Injectable()
export class AuthorsService {

  constructor() { }

  get list() {
    return [ 'A1', 'A2', 'A3' ];
  }

}
