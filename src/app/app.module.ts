import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TooltipModule } from 'ng2-tooltip-directive';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EpisodesComponent } from './episodes/episodes.component';
import { MessagesComponent } from './messages/messages.component';
import { ReplaceEmptyPipe } from './replace-empty.pipe';
import { CharactersComponent } from './characters/characters.component';
import { BannerComponent } from './banner/banner.component';
import { LocationsComponent } from './locations/locations.component';

@NgModule({
  declarations: [
    AppComponent,
    EpisodesComponent,
    MessagesComponent,
    ReplaceEmptyPipe,
    CharactersComponent,
    BannerComponent,
    LocationsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    TooltipModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
