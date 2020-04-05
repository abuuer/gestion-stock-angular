import { Component, OnInit } from '@angular/core';
import {MagasinService} from "../../../controller/service/magasin.service";
import {Magasin} from "../../../controller/model/magasin/magasin.model";
import {Stock} from "../../../controller/model/magasin/stock.model";
import {EntiteAdministrativeService} from "../../../controller/service/entite-administrative.service";

@Component({
  selector: 'app-magasin3',
  templateUrl: './magasin3.component.html',
  styleUrls: ['./magasin3.component.css']
})
export class Magasin3Component implements OnInit {

  constructor(private magasinService: MagasinService, private entiteAdministrativeService: EntiteAdministrativeService) { }

  ngOnInit(): void {
    this.magasinService.findAll();
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
  public findByReference(reference: string) {
    if (reference == null ) {
      alert('please enter a reference of magasin');
    } else {
      this.magasinService.findByReference(reference);
    }
  }

  public removeEmployeFromMagasin(codeEmploye: string, refMagasin: string) {
    this.entiteAdministrativeService.removeEmployeFromMagasin(codeEmploye, refMagasin);
  }
}
