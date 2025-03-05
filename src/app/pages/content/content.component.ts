import { Component, type OnInit } from '@angular/core';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { fakeDB } from '../../data/dataFake';

@Component({
  selector: 'app-content',
  imports: [RouterModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent implements OnInit{
  image = '';
  title = '';
  description = '';
  private id: string | null = '';

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramValue => {
      this.id = paramValue.get("id");
    });

    this.setComponentValues()
  }

  setComponentValues() {
    const currentData = fakeDB.find(value => value.id === this.id)

    if (!currentData) {
      return
    }

    this.image = currentData.image;
    this.title = currentData.title;
    this.description = currentData.description || "";
  }
}
