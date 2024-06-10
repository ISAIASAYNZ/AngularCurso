import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {
  
  ngOnInit(): void {
      this.peliculasEnCines =  [{
        titulo: 'The Batman',
        fechaLanzamiento: new Date(),
        precio: 1499.99,
        poster: 'https://th.bing.com/th/id/OIP.Sn2fm9Nn1SjfiOdEqVBMsgHaLD?rs=1&pid=ImgDetMain'
      },
      {
        titulo: 'Superma Returns',
        fechaLanzamiento: new Date('2018-12-14'),
        precio: 600.99,
        poster: 'https://th.bing.com/th/id/R.d6ef53b6bd842f9923117a7111d98217?rik=kjM19FY71KF2Ig&riu=http%3a%2f%2fbensbargains.net%2fthecheckout%2fwp-content%2fuploads%2f2013%2f05%2fSuperman-returns-poster.jpg&ehk=SUKiDcQo2D%2bPq%2fzpDdEcWZLDP65%2fz2t%2fBzG0jKGUVMk%3d&risl=&pid=ImgRaw&r=0'
      }];
  }

  peliculasEnCines;
  peliculasProximosEstrenos = []


}
