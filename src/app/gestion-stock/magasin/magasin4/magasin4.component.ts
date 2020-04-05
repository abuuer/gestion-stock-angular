import { Component, OnInit } from '@angular/core';
import {MagasinService} from "../../../controller/service/magasin.service";
import {Magasin} from "../../../controller/model/magasin/magasin.model";
import {Stock} from "../../../controller/model/magasin/stock.model";

@Component({
  selector: 'app-magasin4',
  templateUrl: './magasin4.component.html',
  styleUrls: ['./magasin4.component.css']
})
export class Magasin4Component implements OnInit {

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
  public findStockByMagasin(reference: string) {
    if (reference == null ) {
      alert('please enter a reference of magasin');
    } else {
      this.magasinService.findStockByMagasin(reference);
    }
  }
  get foundedStocks(): Stock[] {
    return this.magasinService.foundedStocks;
  }
  public addProductToMagasin(refStock: string, refMag: string, refProd: string, quantiteMax: number, quantite: number) {
    this.magasinService.addProductToMagasin(refStock, refMag, refProd, quantiteMax, quantite);
  }
  public removeProductFromMagasin(refMag: string, refProd: string, quantiteToRemove: number) {
    this.magasinService.removeProductFromMagasin(refMag, refProd, quantiteToRemove);
  }
}
