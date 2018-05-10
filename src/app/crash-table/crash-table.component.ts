import { CoursesService } from './../courses.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crash-table',
  templateUrl: './crash-table.component.html',
  styleUrls: ['./crash-table.component.css']
})
/* class NgIfSimple {
  show: boolean = true;
} */
export class CrashTableComponent implements OnInit {
  CoursesService: any;
  crashes: any;
  show: boolean;
  dtOptions: DataTables.Settings = {};
  // constructor(private tableServe: CoursesService) {

  // this.crashes = tableServe.getCourses();
  // this.show = true;
  //  }

   ngOnInit(): void {
    this.dtOptions = {
      ajax: 'src/assets/data.json',
      columns: [{
        title: 'ID',
        data: 'id'
      }, {
        title: 'First name',
        data: 'firstName'
      }, {
        title: 'Last name',
        data: 'lastName'
      }]
    };
  }
}


