import { Component, OnInit } from '@angular/core';
import { AsyncSubject } from 'rxjs/AsyncSubject';

@Component({
  selector: 'app-async-subject',
  templateUrl: './async-subject.component.html',
  styleUrls: ['./async-subject.component.css']
})
export class AsyncSubjectComponent implements OnInit {
  s: string;
  constructor() { }

  ngOnInit() {
    /* create an instance of AsyncSubject. */
const s = new AsyncSubject<number>();

/* Subscribe to subject. */
console.log('---START ASYNC SUBJECT---');
s.subscribe(  next => this.showRezultOut(next) );
s.subscribe(
  next => console.log('before 21:', next),
  error => console.warn(error),
  () => console.log('complete before 21')
);

/* Emit some values. */

console.log('---21---');
s.next(21);
console.log('---22---');
s.next(22);
console.log('---23---');
s.next(23);

/* Subscribe late to subject. */
s.subscribe(
  next => console.log('after 23:', next),
  error => console.warn(error),
  () => console.log('complete after 23')
);

/* Complete the observable stream. */
// we must complete so values are emited to subscriptions
console.log('---24---');
s.next(24);
console.log('---NULL---');
s.complete();
console.log('---END  ASYNC SUBJECT---');
/* TAKEAWAY */
// An AsyncSubject emits the last value
// (and only the last value)
// emitted by the source Observable,
// and only after that source Observable completes.

  }
  showRezultOut(val): void {
    this.s = 'Show async subject number = ' + val;
           console.log( this.s);
  }

}
