import { Component, OnInit } from '@angular/core';
import {EntiteAdministrative} from "../../../controller/model/administration/entite-administrative.model";
import {EntiteAdministrativeService} from "../../../controller/service/entite-administrative.service";

@Component({
  selector: 'app-entite-administrative2',
  templateUrl: './entite-administrative2.component.html',
  styleUrls: ['./entite-administrative2.component.css']
})
export class EntiteAdministrative2Component implements OnInit {

  constructor(private entiteAdministrativeService: EntiteAdministrativeService) { }

  ngOnInit(): void {
    this.entiteAdministrativeService.findAll();
  }

  get entitiesAdministratives(): Array<EntiteAdministrative> {
    return this.entiteAdministrativeService.entitiesAdministratives;
  }
  public deleteByReference(entiteAdministrative: EntiteAdministrative) {
    this.entiteAdministrativeService.deleteByReference(entiteAdministrative);
  }
}
