import { Component, OnInit } from '@angular/core';
import {MagasinService} from "../../../controller/service/magasin.service";
import {Magasin} from "../../../controller/model/magasin/magasin.model";
import {Stock} from "../../../controller/model/magasin/stock.model";

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
}
