import {Component} from '@angular/core';
import {CarsService} from "./cars.service";

interface Cars{
  name: string;
  color: string;
  id: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  colors =[
    'red',
    'blue',
    'geen',
    'pink',
    'yellow',
    'grey'
  ];
 cars: Cars[] = [];
 carName: string = '';
 carColor: string = '';

 constructor(private carsService: CarsService){}

  loadCars(){
    this.carsService
      .getCars()
      .subscribe((cars: Cars[])=>{
        this.cars=cars;
      })
    ;
  }

  addCar(){
    this.carsService
      .addCar(this.carName, this.carColor)
      .subscribe((car: Cars)=>{
      this.cars.push(car);
      });
    this.carName='';
    this.carColor='';
  }

  getRandColor(){
    const index = Math.round(Math.random()*(this.colors.length-1));
    return this.colors[index];
  }

  setNewColor(car: Cars){
    this.carsService.changeColor(car, this.getRandColor())
      .subscribe((data)=>{
      console.log(data);
      });
  }

  deleteCar(car: Cars){
    this.carsService.deleteCar(car)
      .subscribe((data)=>{
      this.cars=this.cars.filter(c=>c.id !==car.id);
        console.log(data);
      });
  }
}
