import {Injectable} from '@angular/core'
import {Http, Response} from '@angular/http';

@Injectable ()
export class CarsService {

  constructor( private httpVar: Http) {}

  getCars(){
    return this.httpVar.get('http://localhost:3000/cars')
      .map((response: Response)=>response.json() );
  }
}
