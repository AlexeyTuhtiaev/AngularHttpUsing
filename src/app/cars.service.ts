import {Injectable} from '@angular/core'
import {Http, Response} from '@angular/http';

@Injectable ()
export class CarsService {

  constructor( private httpVar: Http) {}

  getCars(){
    return this.httpVar.get('http://localhost:3000/cars')
      .map((response: Response)=>response.json());
  }

  addCar(carName: string, carColor: string){
    const data={
      name: carName,
      color: carColor
    };
    return  this.httpVar.post('http://localhost:3000/cars',data)
      .map((response: Response)=>response.json());
  }

  changeColor(car: any, color: string){
    car.color=color;
    return this.httpVar.put(`http://localhost:3000/cars/${car.id}`, car)
      .map((response: Response)=>response.json());
  }
}
