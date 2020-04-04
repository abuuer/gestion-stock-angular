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
    this.entiteAdministrativeService.findAll();
  }

  get entiteAdministrative(): EntiteAdministrative {
   return  this.entiteAdministrativeService.entiteAdministrative;
  }

  public findByReference(ref: string): EntiteAdministrative {
    if (ref != null) {
      return this.entiteAdministrativeService.findByReference(ref);
    } else {
      alert('please enter the reference');
    }

  }
  public save(entiteAdministrative: EntiteAdministrative) {
    if (entiteAdministrative.reference != null && entiteAdministrative.nom != null && entiteAdministrative.chef.code != null) {
      this.entiteAdministrativeService.save(this.entiteAdministrative);
    } else {
      alert('please fill out the form');
    }
  }
  get entitiesAdministratives(): Array<EntiteAdministrative> {
    return this.entiteAdministrativeService.entitiesAdministratives;
  }
  get loadedEntite(): EntiteAdministrative {
    return this.entiteAdministrativeService.loadedEntite;
  }
  public deleteByReference(entiteAdministrative: EntiteAdministrative) {
    this.entiteAdministrativeService.deleteByReference(entiteAdministrative);
  }
  public addEmployeToMagasin(codeEmploye: string, refMagasin: string) {
    this.entiteAdministrativeService.addEmployeToMagasin(codeEmploye, refMagasin);
  }

}
