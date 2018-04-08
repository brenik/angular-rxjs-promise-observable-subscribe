import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs/operators/filter';
import { map } from 'rxjs/operators/map';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Component({
  selector: 'app-pipe-function',
  templateUrl: './pipe-function.component.html',
  styleUrls: ['./pipe-function.component.css']
})
export class PipeFunctionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const squareOdd = Observable.of(10, 20, 30, 40, 50)
  .pipe(
    filter(n => n % 20 !== 0),
    map(n => n * n)
  );

// Subscribe to get values
squareOdd.subscribe(x => console.log('Observable Pipe Function -' + x));
  }

}
