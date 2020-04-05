import { Component, OnInit } from '@angular/core';
import {EntiteAdministrativeService} from "../../../controller/service/entite-administrative.service";
import {EntiteAdministrative} from "../../../controller/model/administration/entite-administrative.model";
import {Magasin} from "../../../controller/model/magasin/magasin.model";
import {MagasinService} from "../../../controller/service/magasin.service";
import {Personnel} from "../../../controller/model/administration/personnel.model";
import {AdministrationService} from "../../../controller/service/administration.service";

@Component({
  selector: 'app-entite-administrative4',
  templateUrl: './entite-administrative4.component.html',
  styleUrls: ['./entite-administrative4.component.css']
})
export class EntiteAdministrative4Component implements OnInit {

  constructor(private entiteAdministrativeService: EntiteAdministrativeService, private magasinService: MagasinService, private administrationService: AdministrationService) { }

  ngOnInit(): void {
    this.magasinService.findAll();
    this.administrationService.findAllChef();
  }
  get loadedEntite(): EntiteAdministrative {
    return this.entiteAdministrativeService.loadedEntite;
  }
  public addEmployeToMagasin(codeEmploye: string, refMagasin: string) {
    if (codeEmploye == null || refMagasin == null) {
      alert('please fill in the information');
    } else {
      this.entiteAdministrativeService.addEmployeToMagasin(codeEmploye, refMagasin);
    }
  }
  get magasins(): Array<Magasin> {
    return  this.magasinService.magasins;
  }
  get chefs(): Array<Personnel> {
   return this.administrationService.chefs;
  }
}
