import { Component, OnInit } from '@angular/core';
import { Observer } from 'rxjs/Observer';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { publish, takeWhile, tap } from 'rxjs/operators';
import { ConnectableObservable } from 'rxjs/observable/ConnectableObservable';

import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/publish';



@Component({
  selector: 'app-subject-multicast',
  templateUrl: './subject-multicast.component.html',
  styleUrls: ['./subject-multicast.component.css']
})
export class SubjectMulticastComponent implements OnInit {
s: string;
i = 60;
  constructor() { }

  ngOnInit() {
    /* Component state. */
let alive = true;
console.log('---START MULTICAST---');
/* create a new observable, providing the observer. */
let i;
const observable = new Observable(observer => {

  console.log('%cNew Multicast subscription created', 'background: #222; color: #bada55');


  const interval = setInterval(() => {
    console.log(i);
    i = this.i++;
    observer.next(i);
    console.log(-i);
  }, 100);

  return () => {
    clearInterval(interval);
  };
})
.pipe(
  takeWhile(() => alive)
);

const multicasted = observable.publish();

/* Each subscription receives a copy of Observer. */

multicasted.subscribe(value => this.showRezultOut( value));
// multicasted.subscribe(value => console.log('First Multicast subscription', value));
// multicasted.subscribe(value => console.log('Second Multicast subscription', value));
/* Connect the subject to the observabe. */
multicasted.connect();

/* Complete the observable after 5 seconds. */
setTimeout(() => alive = false, 700);
console.log('---END MULTICAST---');
/* TAKEAWAY */
// A multicasted observable emits the results to multiple observers
// using a single subscription to the underlying stream.

  }
  showRezultOut(val): void {
    this.s = 'Show Multicast number = ' + val;
           console.log( this.s);
  }
}
