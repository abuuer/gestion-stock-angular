import { Component, OnInit } from '@angular/core';
import {MagasinService} from "../../../controller/service/magasin.service";
import {Magasin} from "../../../controller/model/magasin/magasin.model";
import {Stock} from "../../../controller/model/magasin/stock.model";
import {Router} from "@angular/router";
import {EntiteAdministrativeService} from "../../../controller/service/entite-administrative.service";



@Component({
  selector: 'app-magasin',
  templateUrl: './magasin.component.html',
  styleUrls: ['./magasin.component.css']
})
export class MagasinComponent implements OnInit {
  entitesAdministratives = new Array<EntiteAdministrative>();

  constructor(private magasinService: MagasinService, private  router: Router, private entiteAdministrativeService: EntiteAdministrativeService) { }

  ngOnInit(): void {
    this.magasinService.findAll();
  }
  public goToPage1(nomPage: string) {
    this.router.navigate([`${nomPage}`]);
  }

  public findAllEntites(): Array<EntiteAdministrative> {
    this.entitesAdministratives = this.entiteAdministrativeService.findAllEntites();
    return this.entiteAdministrativeService.findAllEntites();
  }
  public save() {
    this.magasinService.save();
  }
  public validateSave(): boolean {
    return this.magasinService.validateSave();
  }
  get magasin(): Magasin {
    return this.magasinService.magasin;
  }
  public deleteByReference(magasin: Magasin) {
    this.magasinService.deleteByReference(magasin);
  }
  get foundedMagasin(): Magasin {
    return this.magasinService.foundedMagasin;
  }

}
