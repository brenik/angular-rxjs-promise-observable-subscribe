import { Component, OnInit } from '@angular/core';
import { ReplaySubject } from 'rxjs/ReplaySubject';

@Component({
  selector: 'app-replay-subject',
  templateUrl: './replay-subject.component.html',
  styleUrls: ['./replay-subject.component.css']
})
export class ReplaySubjectComponent implements OnInit {
s: string;
  constructor() { }

  ngOnInit() {
    /* create an instance of ReplaySubject. */
const s = new ReplaySubject<number>();
console.log('---START REPLAY SUBJECT---');
/* Subscribe to subject. */
s.subscribe(  next => this.showRezultOut(next) );
s.subscribe(
  next => console.log('before:', next),
  error => console.warn(error),
  () => console.log('complete before')
);

/* Emit some values. */
s.next(41);
s.next(42);
s.next(43);

/* Subscribe late to subject. */
s.subscribe(  next => this.showRezultOut('after ' + next) );
s.subscribe(
  next => console.log('after:', next),
  error => console.warn(error),
  () => console.log('complete after')
);

/* Complete the observable stream. */
s.complete();
console.log('---END REPLAY SUBJECT---');
/* TAKEAWAY */
// ReplaySubject emits to any observer all of the items
// that were emitted by the source Observable(s),
// regardless of when the observer subscribes.

  }

  showRezultOut(val): void {
    this.s = 'Show replay subject number = ' + val;
           console.log( this.s);
  }

}
