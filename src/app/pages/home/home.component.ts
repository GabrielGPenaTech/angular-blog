import { Component } from '@angular/core';
import { TitleComponent } from "../../components/title/title.component";
import { HeroCardComponent } from "../../components/hero-card/hero-card.component";
import { NoticeCardComponent, type CardProps } from "../../components/notice-card/notice-card.component";
import { MenuBarComponent } from "../../components/menu-bar/menu-bar.component";
import { data } from '../../data/dataFake';

@Component({
  selector: 'app-home',
  imports: [TitleComponent, HeroCardComponent, NoticeCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  cardsNoticeInfos: CardProps[] = []
  cardHero: CardProps = {} as CardProps

  constructor() {
    this.cardsNoticeInfos = data;

    this.cardHero = {
      id: '4',
      image: 'https://t.ctcdn.com.br/7c-lFbP26Q_amYfHXgsUqW2vTLw=/640x360/smart/i325370.jpeg',
      span: 'acho que é a data',
      title: 'Tirando foto de uma paisagem muito linda',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, quas, id, inventore aspernatur nam officiis reiciendis facere voluptates repudiandae ipsam hic rem. Asperiores aperiam eius earum, quaerat soluta nobis labore.'
    }
  }
}
