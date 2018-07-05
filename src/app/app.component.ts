import {Component, OnInit} from '@angular/core';
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
export class  AppComponent implements OnInit{
  colors =[
    'red',
    'blue',
    'geen',
    'pink',
    'yellow',
    'grey'
  ];
 cars: any;
 carName: string = '';
 carColor: string = '';
 appTitle;

 constructor(private carsService: CarsService){}

 ngOnInit(){
   this.appTitle = this.carsService.getAppTitle();
 }

  loadCars(){
  this.cars =  this.carsService.getCars();
  }

  addCar(){
    this.carsService
      .addCar(this.carName, this.carColor)
      .subscribe(
        (car: Cars)=>{
          this.cars.push(car);
      },
        (error)=>{
          alert(error);
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
