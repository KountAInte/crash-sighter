import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { AngularwayService } from './angularway.service';
import { CoursesService } from './courses.service';
// importo a Courses Component
import { Observable } from 'rxjs/Observable';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError, retry } from 'rxjs/operators';

import { CoursesComponent } from './courses.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AvbarComponent } from './avbar/avbar.component';
import { BotoneraComponent } from './botonera/botonera.component';
import { CrashTableComponent } from './crash-table/crash-table.component';
import { CrashMapComponent } from './crash-map/crash-map.component';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { RouterModule } from '@angular/router';
import { InlineSVGModule } from 'ng-inline-svg'; // para usan iconos
import { AngularSvgIconModule } from 'angular-svg-icon';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AgmCoreModule } from '@agm/core';
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';
import { MarcadorComponent } from './marcador/marcador.component';
import { MensajeInicialComponent } from './mensaje-inicial/mensaje-inicial.component';
import { DataTablesModule } from 'angular-datatables';
import { AngularwayComponent } from './angularway/angularway.component';
import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    AvbarComponent,
    BotoneraComponent,
    CrashTableComponent,
    CrashMapComponent,
    MarcadorComponent,
    MensajeInicialComponent,
    AngularwayComponent,
    AboutPageComponent,
    NotFoundPageComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    InlineSVGModule,
    AngularSvgIconModule,
    DataTablesModule,
    HttpClientModule,
    NgbModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCexLpFKKMYGnwWTFV5fy-r9_bf7AjsNgc'
    }),
    AgmSnazzyInfoWindowModule,
    RouterModule.forRoot([
      { path: '', component: HomePageComponent },
      { path: 'about', component: AboutPageComponent },
      { path: '**', component: NotFoundPageComponent }
    ])
  ],
  providers: [
    CoursesService,
    AngularwayService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
