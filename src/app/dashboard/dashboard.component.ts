import { Component, OnInit } from '@angular/core';
import { Cast } from '../cast';
import { CastService } from '../cast.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  castings: Cast[] = [];

  constructor(private castService: CastService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.castService.getCastings()
      .subscribe(castings => this.castings = castings.slice(1, 5));
  }
}
