import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{title}}</h1>
    <h2>My favorite hero is: {{myHero}}</h2>
    <h4>Pick a highlight color</h4>
    <div>
      <input type="radio" name="colors" (click)="color='lightgreen'">Green
      <input type="radio" name="colors" (click)="color='yellow'">Yellow
      <input type="radio" name="colors" (click)="color='cyan'">Cyan
    </div>
    <p [appHighlight]="color" [highlightColor2]="'orange'">Highlighted with color var</p>
    <app-power-booster></app-power-booster>
    `
})
export class AppComponent {
  color = '';
  title = 'Tour of Heroes';
  myHero = 'Windstorm';
}
