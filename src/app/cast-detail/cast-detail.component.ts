import { Component, Input } from '@angular/core';
import { Cast } from '../cast';


@Component({
    selector: 'app-cast-detail',
    templateUrl: './cast-detail.component.html',
    styleUrls: ['./cast-detail.component.css']
})

export class CastDetailsComponent {
    @Input() cast: Cast;
    test = 'Cast';
}
