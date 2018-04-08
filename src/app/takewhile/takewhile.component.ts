import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { takeWhile } from 'rxjs/operators';
import 'rxjs/add/observable/interval';


@Component({
  selector: 'app-takewhile',
  templateUrl: './takewhile.component.html',
  styleUrls: ['./takewhile.component.css']
})
export class TakewhileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
/* create a new observable, providing the observer. */
const observable = Observable.interval(1000);

/* Store component state. */
let alive = true;

/* Subscribe to Notifications. */
observable
  .pipe(
    takeWhile(() => alive)
  )
  .subscribe(value => console.log(value + ' TAKE WHILE----------------------'));

/* Toggle component state. */
setTimeout(() => alive = false, 16000);
  }

}
