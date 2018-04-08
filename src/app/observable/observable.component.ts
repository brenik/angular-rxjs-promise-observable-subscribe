import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {
  s: string;
 count = 0;

  constructor() { }

  ngOnInit() {
    /* create a new observable, providing the observer. */
const observable: Observable<string> = new Observable(observer => {

  const interval = setInterval(() => {
    observer.next('Hello from Observableland!');
  }, 2000);
  this.stopExecut(interval);
  // teardown
/*   return () => {
        clearInterval(interval);
  }; */
});
/* Subscribe to Notifications. */
//  observable.subscribe(value => console.log(value));
observable.subscribe(  value => this.showRezultOut(value) );
// Observables are simply function that take an observer and return a function

  }
  showRezultOut(val): void {
this.count += 1;
    this.s = val + ' attempt ' + this.count;
    console.log('Console Observable s = ' + this.s);
    }

    // teardown
    stopExecut(interval) {
      setTimeout(function() {
      clearInterval(interval);
      }, 10000);
    }

}
