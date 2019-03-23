import { Location } from './../location';
import { Component, OnInit } from '@angular/core';
import { RicknmortyService } from '../ricknmorty.service';

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

  getLocations(): void {
    this.ricknmortyService.getLocations(this.current_page)
      .subscribe(response => {
        this.locations = this.locations.concat(response.results);
        this.show_more = response.info.next !== "";
      });
  }

  loadMore(): void {
    this.current_page++;
    this.getLocations();
  }

}
