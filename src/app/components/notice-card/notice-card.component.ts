import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

export type CardProps = {
  id: string;
  image: string;
  span: string;
  title: string;
  description?: string
}

@Component({
  selector: 'app-notice-card',
  imports: [RouterModule],
  templateUrl: './notice-card.component.html',
  styleUrl: './notice-card.component.css'
})
export class NoticeCardComponent {

  @Input()
  infos: CardProps[] = []

}
