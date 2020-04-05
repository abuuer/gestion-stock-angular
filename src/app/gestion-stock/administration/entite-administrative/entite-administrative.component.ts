import { Component, OnInit } from '@angular/core';
import {EntiteAdministrativeService} from "../../../controller/service/entite-administrative.service";
import {EntiteAdministrative} from "../../../controller/model/administration/entite-administrative.model";
import {Router} from "@angular/router";
import {Personnel} from "../../../controller/model/administration/personnel.model";
import {AdministrationService} from "../../../controller/service/administration.service";

@Component({
  selector: 'app-entite-administrative',
  templateUrl: './entite-administrative.component.html',
  styleUrls: ['./entite-administrative.component.css']
})
export class EntiteAdministrativeComponent implements OnInit {

  constructor(private entiteAdministrativeService: EntiteAdministrativeService, private router: Router, private administrationService: AdministrationService) { }

  ngOnInit(): void {
    this.entiteAdministrativeService.findAll();
    this.administrationService.findAllChef();
  }

  public goToPage1(nomPage: string) {
    this.router.navigate([`${nomPage}`]);
  }
  get entiteAdministrative(): EntiteAdministrative {
   return  this.entiteAdministrativeService.entiteAdministrative;
  }


  public save(entiteAdministrative: EntiteAdministrative) {
    if (entiteAdministrative.reference != null && entiteAdministrative.nom != null && entiteAdministrative.chef.code != null) {
      this.entiteAdministrativeService.save(this.entiteAdministrative);
    } else {
      alert('please fill in the form');
    }
  }

  public deleteByReference(entiteAdministrative: EntiteAdministrative) {
    this.entiteAdministrativeService.deleteByReference(entiteAdministrative);
  }
  public addEmployeToMagasin(codeEmploye: string, refMagasin: string) {
    this.entiteAdministrativeService.addEmployeToMagasin(codeEmploye, refMagasin);
  }

  get chefs(): Array<Personnel> {
    return this.administrationService.chefs;
  }
}
