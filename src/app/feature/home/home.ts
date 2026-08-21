import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Album {
  titulo: string;
  anio: number;
  imagen: string;
}

@Component({
  imports: [RouterLink],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {
  protected readonly heroImagen =
    'https://live-production.wcms.abc-cdn.net.au/3769560fef175d8bcbc7adba4c3fbcbb?impolicy=wcms_watermark_abc&cropH=1125&cropW=1998&xPos=1&yPos=0&width=862&height=485&imformat=generic';

  protected readonly albums: Album[] = [
    {
      titulo: 'Is This It',
      anio: 2001,
      imagen:
        'https://m.media-amazon.com/images/I/91PbdrEjhaL._UF1000,1000_QL80_.jpg',
    },
    {
      titulo: 'Room on Fire',
      anio: 2003,
      imagen:
        'https://i.discogs.com/qeZqSMPWDjs1HISu_GI8z-BAfLSCBwo0V1_dPSqOhlE/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTc5NTUz/MDUtMTQ1MjQzNzA1/NC0yOTA0LnBuZw.jpeg',
    },
    {
      titulo: 'First Impressions of Earth',
      anio: 2006,
      imagen:
        'https://images.genius.com/61a37cadd18c410909414246027a4d0a.1000x1000x1.png',
    },
    {
      titulo: 'The New Abnormal',
      anio: 2020,
      imagen:
        'https://www.guioteca.com/los-2000/files/2021/04/81xesqe7UML._SL1500_.jpg',
    },
  ];
}
