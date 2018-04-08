import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-observable-unicast',
  templateUrl: './observable-unicast.component.html',
  styleUrls: ['./observable-unicast.component.css']
})
export class ObservableUnicastComponent implements OnInit {
  s: string;
  i = 50;

  constructor() { }

  ngOnInit() {
    // i: number;
    /* create a new observable, providing the observer. */

console.log('---START OBSERVABLE UNICAST---');
const observable: Observable<number> = new Observable(observer => {

  console.log('%cNew subscription created', 'background: #222; color: #bada55');



  const interval = setInterval(() => {
    console.log(this.i);
    this.i++;
    observer.next(this.i);
    console.log(-this.i);
  }, 100);

  return () => {
    clearInterval(interval);
  };

});

/* Each subscription receives a copy of Observer. */
const subscription = observable.subscribe(value => this.showRezultOut( value));
// const subscription = observable.subscribe(value => console.log('First subscription', value));
subscription.add(observable.subscribe(value => console.log('Second Observable Unicast subscription', value)));

/* Unsubscribe after 0.5 seconds. */
setTimeout(() => subscription.unsubscribe(), 400);

/* TAKEAWAY */
// Observables are unicast by default
console.log('---END OBSERVABLE UNICAST---');
  }
  showRezultOut(val): void {
    this.s = 'Show First Observable Unicast number = ' + val;
           console.log( this.s);
  }
}



