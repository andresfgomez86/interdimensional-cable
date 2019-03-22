import { Component, OnInit } from '@angular/core';
import { Episode } from '../episode';
import { Character } from './../character';
import { RicknmortyService } from '../ricknmorty.service';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss']
})
export class EpisodesComponent implements OnInit {
  episodes: Episode[] = [];
  selected_episode: Episode;
  current_characters: Character[] = [];

  constructor(private ricknmortyService: RicknmortyService) { }

  ngOnInit() {
    this.getEpisodes();
  }

  getEpisodes(): void {
    this.ricknmortyService.getEpisodes()
      .subscribe(response => this.episodes = response.results);
  }

  selectEpisode(episode:Episode): void {
    this.selected_episode = episode;
    const character_ids:number[] = episode.characters.map(character => {
      const character_split:string[] = character.split('/');
      const id:number = +character_split[character_split.length - 1];
      return id;
    });
    this.ricknmortyService.getCharacters(character_ids)
    .subscribe(response => this.current_characters = response.results);
  }

  resetSelectedEpisode(): void {
    this.selected_episode = null;
  }

}
