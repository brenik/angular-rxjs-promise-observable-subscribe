import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.css']
})
export class OperatorsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const nums = Observable.of(1, 2, 3, 4, 5, 6, 7, 8, 9 );

const squareValues = map((val: number) => val * val);
const squaredNums = squareValues(nums);

squaredNums.subscribe(x => console.log('Observable Operators' + x));
  }

}
