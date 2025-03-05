import { Component, Input } from '@angular/core';

export type CardProps = {
  image: string;
  span: string;
  title: string;
}

@Component({
  selector: 'app-notice-card',
  imports: [],
  templateUrl: './notice-card.component.html',
  styleUrl: './notice-card.component.css'
})
export class NoticeCardComponent {

  @Input()
  infos: CardProps[] = []

}
