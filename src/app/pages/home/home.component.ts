import { Component } from '@angular/core';
import { TitleComponent } from "../../components/title/title.component";
import { HeroCardComponent } from "../../components/hero-card/hero-card.component";
import { NoticeCardComponent } from "../../components/notice-card/notice-card.component";
import { MenuBarComponent } from "../../components/menu-bar/menu-bar.component";

@Component({
  selector: 'app-home',
  imports: [TitleComponent, HeroCardComponent, NoticeCardComponent, MenuBarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
