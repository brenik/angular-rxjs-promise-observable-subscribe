import { Component, OnInit } from '@angular/core';
import { fromPromise } from 'rxjs/observable/fromPromise';

@Component({
  selector: 'app-from-promise',
  templateUrl: './from-promise.component.html',
  styleUrls: ['./from-promise.component.css']
})
export class FromPromiseComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // Create an Observable out of a promise
const data = fromPromise(fetch('/api/endpoint'));
// Subscribe to begin listening for async result
data.subscribe({
 next(response) { console.log(response); },
 error(err) { console.error('Error: ' + err); },
 complete() { console.log('Completed FromPromise'); }
});
  }

}
