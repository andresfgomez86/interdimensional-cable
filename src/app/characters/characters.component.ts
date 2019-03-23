import { Character } from '../shared/models/character';
import { Component, OnInit } from '@angular/core';
import { RicknmortyService } from '../shared/services/ricknmorty.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  characters: Character[] = [];
  show_more: boolean = false;
  current_page: number = 1;

  constructor(private ricknmortyService: RicknmortyService) { }

  ngOnInit() {
    this.getCharacters();
  }

  getCharacters(): void {
    this.ricknmortyService.getCharacters(this.current_page)
      .subscribe(response => {
        this.characters = this.characters.concat(response.results);
        this.show_more = response.info.next !== "";
      });
  }

  loadMore(): void {
    this.current_page++;
    this.getCharacters();
  }

}
