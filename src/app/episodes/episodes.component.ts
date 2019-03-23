import { Component, OnInit } from '@angular/core';
import { Episode } from '../shared/models/episode';
import { Character } from '../shared/models/character';
import { RicknmortyService } from '../shared/services/ricknmorty.service';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss']
})
export class EpisodesComponent implements OnInit {
  episodes: Episode[] = [];
  selected_episode: Episode;
  selected_episode_row: number = -1;
  episode_characters: Character[] = [];
  show_modal: boolean = false;
  selected_character: Character;
  show_loader: boolean = true;

  constructor(private ricknmortyService: RicknmortyService) { }

  ngOnInit() {
    this.getEpisodes();
  }

  getEpisodes(): void {
    this.ricknmortyService.getEpisodes()
      .subscribe(response => this.episodes = response.results);
  }

  selectEpisode(episode:Episode, row:number): void {
    this.show_loader = true;
    this.selected_episode = episode;
    this.selected_episode_row = row;
    const character_ids:String[] = episode.characters.map(character => {
      const character_split:string[] = character.split('/');
      const id:String = character_split[character_split.length - 1];
      return id;
    });
    this.ricknmortyService.findCharacters(character_ids)
    .subscribe(response => {
      this.episode_characters = response;
      this.show_loader = false;
    });
  }

  resetSelectedEpisode(): void {
    this.selected_episode = null;
    this.selected_episode_row = -1;
  }

  closeCharacterModal(): void {
    this.show_modal = false;
  }

  showCharacterModal(character: Character): void {
    this.selected_character = character;
    this.show_modal = true;
  }

  onKeyDown(event) {
    if (event.key === "Enter") {
      console.log(event);
    }
  }
}
