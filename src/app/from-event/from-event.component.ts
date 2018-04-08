import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs/observable/fromEvent';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.css']
})
export class FromEventComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const el = document.getElementById('mouse_area');

  // Create an Observable that will publish mouse movements
  const mouseMoves = fromEvent(el, 'mousemove');

  // Subscribe to start listening for mouse-move events
  const subscription = mouseMoves.subscribe((evt: MouseEvent) => {
    // Log coords of mouse movements
    console.log(`Coords: ${evt.clientX} X ${evt.clientY}`);

    // When the mouse is over the upper-left of the screen,
    // unsubscribe to stop listening for mouse movements
    if (evt.clientX < 40 && evt.clientY < 40) {
      subscription.unsubscribe();
      console.log(`END MOUSEMOVE`);
    }
  });
  }

}
