import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { filter, takeUntil } from 'rxjs/operators';
import 'rxjs/add/observable/interval';


@Component({
  selector: 'app-takeuntil',
  templateUrl: './takeuntil.component.html',
  styleUrls: ['./takeuntil.component.css']
})
export class TakeuntilComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    /* create a new observable, providing the observer. */
const observable = Observable.interval(1000);

/* Unsubscribe when value is greater than 2 and even. */
const unsubscribe = observable.pipe(
  filter(value => value > 5 )
);

/* Subscribe to Notifications. */
observable
  .pipe(
    takeUntil(unsubscribe)
  )
  .subscribe(value => console.log(value + ' TAKE UNTILE+++++++'));
  }

}
