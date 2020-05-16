import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {IHoroscopes} from '../horoscopes';
import {HoroscopeDataService} from '../horoscope-data.service';

@Component({
  selector: 'app-zodiac-profile',
  templateUrl: './zodiac-profile.component.html',
  styleUrls: ['./zodiac-profile.component.css']
})
export class ZodiacProfileComponent implements OnInit {

  id;
  horoscope: IHoroscopes;

  element: 'fas fa-wind';


  constructor(private route: ActivatedRoute, private horoscopeData: HoroscopeDataService) { }

  ngOnInit(): void {

    this.id = +this.route.snapshot.paramMap.get('id');

    this.horoscope = this.horoscopeData.horoscopes.filter(horo => horo.id === this.id)[0];

    console.log(this.horoscope.horoscopeSign);

  }

}
