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

  /**
   * This function gets the episodes to be displayed in the view
   *
   * @memberof EpisodesComponent
   */
  getEpisodes(): void {
    this.ricknmortyService.getEpisodes()
      .subscribe(response => this.episodes = response.results);
  }

  /**
   * This function is executed when user selects an episode from the list.
   * Updates "Episode details" section (Info ands characters)
   *
   * @param {Episode} episode - Selected episode object
   * @param {number} row - Selected episode row number
   * @memberof EpisodesComponent
   */
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

  /**
   * This function resets the episodes view
   *
   * @memberof EpisodesComponent
   */
  resetSelectedEpisode(): void {
    this.selected_episode = null;
    this.selected_episode_row = -1;
  }

  /**
   * This function closes the Character modal
   *
   * @memberof EpisodesComponent
   */
  closeCharacterModal(): void {
    this.show_modal = false;
  }

  /**
   * This function opens the Character modal with his information
   *
   * @param {Character} character - Selected character object
   * @memberof EpisodesComponent
   */
  showCharacterModal(character: Character): void {
    this.selected_character = character;
    this.show_modal = true;
  }
}
