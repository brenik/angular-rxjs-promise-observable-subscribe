import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-async-observable-pipe',
  templateUrl: './async-observable-pipe.component.html',
  styleUrls: ['./async-observable-pipe.component.css']
})
export class AsyncObservablePipeComponent implements OnInit {
  time = new Observable(observer => { const interval = setInterval(() => {
    observer.next(new Date().toString());
  }, 1000); });


  constructor() { }

  ngOnInit() {

  }


}

// The AsyncPipe subscribes to an observable or promise and returns the latest value it has emitted.
// When a new value is emitted, the pipe marks the component to be checked for changes.

// The following example binds the time observable to the component's view.
// The observable continuously updates the view with the current time.
