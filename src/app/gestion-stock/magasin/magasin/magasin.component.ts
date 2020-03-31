import { Component, OnInit } from '@angular/core';
import {Magasin} from "../../../controller/model/magasin/magasin.model";
import {MagasinService} from "../../../controller/service/magasin.service";
import {EntiteAdministrative} from "../../../controller/model/administration/entite-administrative.model";

@Component({
  selector: 'app-magasin',
  templateUrl: './magasin.component.html',
  styleUrls: ['./magasin.component.css']
})
export class MagasinComponent implements OnInit {

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
  get magasin(): Magasin {
    return this.magasinService.magasin;
  }
  public deleteByReference(magasin: Magasin) {
    this.magasinService.deleteByReference(magasin);
  }
}
