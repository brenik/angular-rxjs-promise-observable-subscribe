import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
  selector: 'app-behavior-subject',
  templateUrl: './behavior-subject.component.html',
  styleUrls: ['./behavior-subject.component.css']
})
export class BehaviorSubjectComponent implements OnInit {
  s: string;
  constructor() { }

  ngOnInit() {
    /* create an instance of BehaviorSubject. */
const s = new BehaviorSubject<number>(0);

/* Subscribe to subject. */
console.log('---START BEHAVIOR SUBJECT---');
s.subscribe(  next => this.showRezultOut(next) );
s.subscribe(
  next => console.log('before:', next),
  error => console.warn(error),
  () => console.log('complete before')
);

/* Emit some values. */
s.next(31);
s.next(32);
s.next(33);
// s.complete();

/* Subscribe late to subject. */
s.subscribe(
  next => console.log('after:', next),
  error => console.warn(error),
  () => console.log('complete after')
);
s.next(34);
s.complete();
console.log('---END BEHAVIOR SUBJECT---');

/* TAKEAWAY */
// When an observer subscribes to a BehaviorSubject,
// it begins by emitting the item most recently emitted by the source Observable
// (or a seed/default value if none has yet been emitted)
// and then continues to emit any other items emitted later by the source Observable(s).
  }

  showRezultOut(val): void {
    this.s = 'Show behavior subject number = ' + val;
           console.log( this.s);
  }

}
