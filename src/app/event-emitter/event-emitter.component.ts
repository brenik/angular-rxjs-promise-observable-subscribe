import { Component, OnInit } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';

@Component({
  selector: 'app-event-emitter',
  templateUrl: './event-emitter.component.html',
  styleUrls: ['./event-emitter.component.css']
})
export class EventEmitterComponent implements OnInit {
  visible = true;
  @Output() open = new EventEmitter<any>();
  @Output() close = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }
    toggle() {
      console.log('CLICK');
    this.visible = !this.visible;
    console.log(this.visible);
    if (this.visible) {
      this.open.emit(null);
    } else {
      this.close.emit(null);
    }
  }
}

// Angular provides an EventEmitter class that is used when publishing values
//  from a component through the @Output() decorator. EventEmitter extends Observable,
//  adding an emit() method so it can send arbitrary values. When you call emit(),
//  it passes the emitted value to the next() method of any subscribed observer.
