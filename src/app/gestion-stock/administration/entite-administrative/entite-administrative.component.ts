import { Component, OnInit } from '@angular/core';
import {EntiteAdministrativeService} from "../../../controller/service/entite-administrative.service";
import {EntiteAdministrative} from "../../../controller/model/administration/entite-administrative.model";

@Component({
  selector: 'app-entite-administrative',
  templateUrl: './entite-administrative.component.html',
  styleUrls: ['./entite-administrative.component.css']
})
export class EntiteAdministrativeComponent implements OnInit {

  constructor(private entiteAdministrativeService: EntiteAdministrativeService) { }

  ngOnInit(): void {
  }

  get entiteAdministrative(): EntiteAdministrativeService {
   return  this.entiteAdministrativeService.entiteAdministrative;
  }

  public findByReference(ref: string): EntiteAdministrative {
    return this.entiteAdministrativeService.findByReference(ref);
  }
}
