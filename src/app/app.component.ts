import {Component} from '@angular/core';
import {CarsService} from "./cars.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 cars = [];

 constructor(private carsService: CarsService){}

  loadCars(){
    this.carsService
      .getCars()
      .subscribe((response)=>{
        console.log(response);
      })
    ;
  }

}
