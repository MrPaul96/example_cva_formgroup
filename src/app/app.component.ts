import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl, Validators, FormBuilder, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent implements OnInit {

  constructor(private builder: FormBuilder) {}

  formGroup: FormGroup;

  cars = [
    {
      make: 'chevrolet',
      year: 1987,
      color: 'red'
    },
    {
      make: 'chevrolet',
      year: 2001,
      color: 'black'
    },
    {
      make: 'ford',
      year: 2015,
      color: ''
    }
  ];

  ngOnInit() {
    this.formGroup = new FormGroup({});
  }

  setUpForm(cars: any[] ) {
    return new FormGroup({
      cars: new FormArray(cars.map((car) => this.createCar(car)))
    });
  }

  createCar(car: any) {
    return new FormControl({
      make: car.make,
      color: car.color,
      year: car.year
    });
  }

  ngDoCheck(): void {
    console.log('hola');
  }

}
