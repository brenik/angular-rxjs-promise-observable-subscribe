import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { share } from 'rxjs/operators';

@Component({
  selector: 'app-cold-and-hot',
  templateUrl: './cold-and-hot.component.html',
  styleUrls: ['./cold-and-hot.component.css']
})
export class ColdAndHotComponent implements OnInit {
  s: string;
  count = 0;
  constructor() { }

  ngOnInit() {
    const observable_cold = new Observable(observer => {
      const interval = setInterval(() => {
        observer.next('Hello from Cold!');
      }, 2000);
      this.stopExecut(interval);
    }).publish();

    const observable_hot = new Observable(observer => {
      const interval = setInterval(() => {
        observer.next('Hello from Hot!');
      }, 2000);
      this.stopExecut(interval);
    }).publish().refCount();


    observable_cold.connect();


    observable_cold.subscribe(value => console.log('COLD = ' + value));
    observable_hot.subscribe(value => console.log('HOT = ' + value));
  }

  stopExecut(interval) {
    setTimeout(function() {
    clearInterval(interval);
    }, 10000);
  }
}
