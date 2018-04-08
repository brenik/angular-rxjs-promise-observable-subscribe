import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs/observable/interval';

@Component({
  selector: 'app-observable-counter',
  templateUrl: './observable-counter.component.html',
  styleUrls: ['./observable-counter.component.css']
})
export class ObservableCounterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // Create an Observable that will publish a value on an interval
const secondsCounter = interval(1000);
// Subscribe to begin publishing values
const subscription = secondsCounter.subscribe(n =>
  console.log(`observable-counter --- It's been ${n} seconds since subscribing!`));

  setTimeout(function() {
    subscription.unsubscribe();
    }, 30000);
  }
}
