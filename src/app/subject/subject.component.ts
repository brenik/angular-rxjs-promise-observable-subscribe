import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {
  s: string;
  constructor() { }

  ngOnInit() {
    /* create an instance of Subject. */
const s = new Subject<number>();

/* Subscribe to subject. */
s.subscribe(  next => this.showRezultOut(next) );
s.subscribe(
  next => console.log('before 1:', next),
  error => console.warn(error),
  () => console.log('complete before 1')
);


s.subscribe(
  next => console.log('before 2:', next),
  error => console.warn(error),
  () => console.log('complete before 2')
);

/* Emit some values. */
console.log('---START SUBJECT---');
console.log('---1---');
s.next(1);
console.log('---2---');
s.next(2);
console.log('---3---');
s.next(3);

/* Subscribe late to subject. */
s.subscribe(
  next => console.log('after:', next),
  error => console.warn(error),
  () => console.log('complete after')
);

/* Late subscription will now receive Notification. */
console.log('---4---');
s.next(4);
console.log('---NULL---');
s.complete();
console.log('---END SUBJECT---');
/* TAKEAWAY */
// Subjects are both an observable as well as an observer
  }

  showRezultOut(val): void {
    this.s = 'Show subject number = ' + val;
           console.log( this.s);
        }

}
