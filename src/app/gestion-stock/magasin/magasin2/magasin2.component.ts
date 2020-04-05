import { Component, OnInit } from '@angular/core';
import {MagasinService} from "../../../controller/service/magasin.service";
import {Magasin} from "../../../controller/model/magasin/magasin.model";
import {Stock} from "../../../controller/model/magasin/stock.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-magasin2',
  templateUrl: './magasin2.component.html',
  styleUrls: ['./magasin2.component.css']
})
export class Magasin2Component implements OnInit {

  constructor(private magasinService: MagasinService) { }

  ngOnInit(): void {
    this.magasinService.findAll();
  }

  public save() {
    this.magasinService.save();
  }
  public validateSave(): boolean {
    return this.magasinService.validateSave();
  }
  get magasins(): Array<Magasin> {
    return this.magasinService.magasins;
  }
  public deleteByReference(magasin: Magasin) {
    this.magasinService.deleteByReference(magasin);
  }
  public findAll() {
    this.magasinService.findAll();
  }
  public setEntiteAdministrative(magasin: Magasin) {
    if (magasin.refEntiteToSet != null) {
      this.magasinService.setEntiteAdministrative(magasin);
    } else {
      alert('please enter the reference');
    }

  }
}
