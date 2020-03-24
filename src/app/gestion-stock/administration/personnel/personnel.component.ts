import { Component, OnInit } from '@angular/core';
import {AdministrationService} from "../../../controller/service/administration.service";

@Component({
  selector: 'app-personnel',
  templateUrl: './personnel.component.html',
  styleUrls: ['./personnel.component.css']
})
export class PersonnelComponent implements OnInit {

  constructor(private administrationService : AdministrationService) { }

  ngOnInit(): void {
  }

}
