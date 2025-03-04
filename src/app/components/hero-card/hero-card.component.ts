import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero-card',
  imports: [],
  templateUrl: './hero-card.component.html',
  styleUrl: './hero-card.component.css'
})
export class HeroCardComponent {
  @Input()
  image = '';
  @Input()
  title = '';
  @Input()
  description = '';
}
