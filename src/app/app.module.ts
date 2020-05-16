import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import {HoroscopesComponent} from './horoscopes/horoscopes/horoscopes.component';
import {ZodiacProfileComponent} from './horoscopes/zodiac-profile/zodiac-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HoroscopesComponent,
    ZodiacProfileComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {path: 'horoscopes', component: HoroscopesComponent},
      {path: 'horoscopes/:id', component: ZodiacProfileComponent},
      {path: '', redirectTo: 'horoscopes', pathMatch: 'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
