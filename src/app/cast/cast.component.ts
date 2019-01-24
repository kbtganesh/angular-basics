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

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.castService.addCast({ name } as Cast)
      .subscribe(cast => {
        this.castings.push(cast);
      });
  }

  delete(cast: Cast) {
    const id = cast.id;
    this.castService.deleteCast(id).subscribe(res => {
      console.log('res', res);
      this.castings = this.castings.filter(c => c.id !== id);
    });
  }

}
