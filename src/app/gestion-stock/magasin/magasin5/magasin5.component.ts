import { Component, OnInit } from '@angular/core';
import {MagasinService} from "../../../controller/service/magasin.service";
import {Magasin} from "../../../controller/model/magasin/magasin.model";
import {Stock} from "../../../controller/model/magasin/stock.model";

@Component({
  selector: 'app-magasin5',
  templateUrl: './magasin5.component.html',
  styleUrls: ['./magasin5.component.css']
})
export class Magasin5Component implements OnInit {

  constructor(private magasinService: MagasinService) { }

  ngOnInit(): void {
    this.magasinService.findAll();
  }

  get magasin(): Magasin {
    return this.magasinService.magasin;
  }
  public deleteByReference(magasin: Magasin) {
    this.magasinService.deleteByReference(magasin);
  }
  get loadedStock(): Stock {
    return this.magasinService.loadedStock;
  }
  public addProductToMagasin(refStock: string, refMag: string, refProd: string, quantiteMax: number, quantite: number) {
    this.magasinService.addProductToMagasin(refStock, refMag, refProd, quantiteMax, quantite);
  }
}
