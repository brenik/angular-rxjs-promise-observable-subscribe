import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.css']
})
export class PromiseComponent implements OnInit {
s: string;

constructor() { }

  ngOnInit() {

    /* create a new promise. */
    const p = new Promise(resolve => {
      setTimeout(() => {
        resolve('Hello from Promiseland!');
      }, 1000); } );
    /* log single value that is emitted. */
    // p.then(value => console.log(value));
    /*send result out*/
    p.then(  value => this.rezultOut(value) );
  }

  rezultOut(val): void {
  this.s = val;
  console.log('Console s = ' + this.s);
  }


}
