import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { HomepageComponent } from './homepage/homepage.component';
import {MatCardModule} from '@angular/material/card';
import { DetailpageComponent } from './detailpage/detailpage.component';
import { DayCardComponent } from './detailpage/day-card/day-card.component';
import { BgAnimatedCloudsComponent } from './bg-animated-clouds/bg-animated-clouds.component';
import {  HttpClientModule } from '@angular/common/http';
import { CityService } from 'src/services/city.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomepageComponent,
    DetailpageComponent,
    DayCardComponent,
    BgAnimatedCloudsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatCardModule,
    HttpClientModule
  ],
  providers: [CityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
