import { Component, OnInit } from '@angular/core';
import { Cast } from '../cast';
import { CASTINGS } from '../mock-cast';
import { CastService } from '../cast.service';


@Component({
  selector: 'app-cast',
  templateUrl: './cast.component.html',
  styleUrls: ['./cast.component.css']
})
export class CastComponent implements OnInit {
  title = 'Castings Lists';
  castings: Cast[];
  // selectedCast: Cast;
  // onSelect(cast: Cast): void {
  //   this.selectedCast = cast;
  // }
  constructor(private castService: CastService) { }

  ngOnInit() {
    this.getCastings();
  }

  getCastings(): void {
    this.castService.getCastings().subscribe(castings => this.castings = castings);
  }

}
