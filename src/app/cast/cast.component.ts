import { Component, OnInit } from '@angular/core';
import { Cast } from '../cast';
import { CASTINGS } from '../mock-cast';


@Component({
  selector: 'app-cast',
  templateUrl: './cast.component.html',
  styleUrls: ['./cast.component.css']
})
export class CastComponent implements OnInit {
  title = 'Castings List';
  castings = CASTINGS;
  selectedCast: Cast;
  onSelect(cast: Cast): void {
    this.selectedCast = cast;
  }
  constructor() { }

  ngOnInit() {
  }

}
