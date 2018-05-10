import { CoursesService } from './../courses.service';
import { CoursesComponent } from './../courses.component';
import { Component, OnInit } from '@angular/core';

interface Poisicion {

latitud: number;
longitud: number;
}

@Component({
  selector: 'app-marcador',
  templateUrl: './marcador.component.html',
  styleUrls: ['./marcador.component.css']
})
export class MarcadorComponent implements OnInit {
marcadores: any;
lat: number;
lon: number;
mark$;

  constructor(marcSlave: CoursesService) {

  this.mark$ = marcSlave.getCourses();

   }

  ngOnInit() {
  }

  printMarker(idIncidencia: any) {
    this.marcadores.forEach(element => {
     if (element.id_incidencia === idIncidencia) {
         this.lat = element.latitud.toNumber();
         this.lon = element.longitud.toNumber();
     }
    });

  }

}
