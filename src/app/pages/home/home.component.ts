import { Component } from '@angular/core';
import { TitleComponent } from "../../components/title/title.component";
import { HeroCardComponent } from "../../components/hero-card/hero-card.component";
import { NoticeCardComponent, type CardProps } from "../../components/notice-card/notice-card.component";
import { MenuBarComponent } from "../../components/menu-bar/menu-bar.component";

@Component({
  selector: 'app-home',
  imports: [TitleComponent, HeroCardComponent, NoticeCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  cardsNoticeInfos: CardProps[] = []

  constructor() {
    this.cardsNoticeInfos = [
      {
        image: 'https://picsum.photos/200/100',
        span: 'acho que é a data',
        title: 'Titulo da noticia que fica ao lado da noticia maior Titulo da noticia que fica ao lado da noticia maior'
      },
      {
        image: 'https://picsum.photos/200/100',
        span: 'acho que é a data',
        title: 'Titulo da noticia que fica ao lado da noticia maior Titulo da noticia que fica ao lado da noticia maior'
      },
      {
        image: 'https://picsum.photos/200/100',
        span: 'acho que é a data',
        title: 'Titulo da noticia que fica ao lado da noticia maior Titulo da noticia que fica ao lado da noticia maior'
      }
    ]
  }
}
