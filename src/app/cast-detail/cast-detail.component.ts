import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Cast } from '../cast';
import { CastService } from '../cast.service';


@Component({
    selector: 'app-cast-detail',
    templateUrl: './cast-detail.component.html',
    styleUrls: ['./cast-detail.component.css']
})

export class CastDetailsComponent implements OnInit {
    @Input() cast: Cast;
    test = 'Cast';

    ngOnInit(): void {
        this.getCast();
    }

    getCast() {
        const id = +this.route.snapshot.paramMap.get('id');
        this.castService.getCast(id).subscribe(cast => this.cast = cast);
    }
    goBack(): void {
        this.location.back();
    }
    constructor(
        private route: ActivatedRoute,
        private castService: CastService,
        private location: Location
    ) { }
}
