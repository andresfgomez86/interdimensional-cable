import { Location } from '../shared/models/location';
import { Component, OnInit } from '@angular/core';
import { RicknmortyService } from '../shared/services/ricknmorty.service';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent implements OnInit {
  locations: Location[] = [];
  show_more: boolean = false;
  current_page: number = 1;

  constructor(private ricknmortyService: RicknmortyService) { }

  ngOnInit() {
    this.getLocations();
  }

  /**
   * This function updates the locations array to be displayed in the view
   * Also udpates the "Load more" button status
   *
   * @memberof LocationsComponent
   */
  getLocations(): void {
    this.ricknmortyService.getLocations(this.current_page)
      .subscribe(response => {
        this.locations = this.locations.concat(response.results);
        this.show_more = response.info.next !== "";
      });
  }

  /**
   * This function is executed when the "Load more" button is clicked
   *
   * @memberof LocationsComponent
   */
  loadMore(): void {
    this.current_page++;
    this.getLocations();
  }

}
