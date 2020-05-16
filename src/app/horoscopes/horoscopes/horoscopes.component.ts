import { Component, OnInit } from '@angular/core';
import {HoroscopeDataService} from '../horoscope-data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-horoscopes',
  templateUrl: './horoscopes.component.html',
  styleUrls: ['./horoscopes.component.css']
})
export class HoroscopesComponent implements OnInit {



  constructor(public horoscopeData: HoroscopeDataService, private router: Router) { }

  ngOnInit(): void {


  }

  selectedHoroscope(id: number) {
    this.router.navigate(['/horoscopes', id]);
  }

}


