import {Injectable} from '@angular/core'
import {Http, Response} from '@angular/http';
import {Observable} from "rxjs/Observable";

@Injectable ()
export class CarsService {
  constructor( private httpVar: Http) {}

  getAppTitle(){
    return this.httpVar.get('http://localhost:3000/title')
      .delay(2000)
      .map((response: Response)=> response.json())
      .map((data)=>data.value);
  }

  getCars(){
    return this.httpVar
      .get('http://localhost:3000/cars')
      .map((response: Response)=>response.json())
      .catch((error: Response)=>{
      return Observable.throw('Error!!!');
      });
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

  deleteCar(car: any){
    return this.httpVar.delete(`http://localhost:3000/cars/${car.id}`)
      .map((response: Response)=>response.json());
  }
}
