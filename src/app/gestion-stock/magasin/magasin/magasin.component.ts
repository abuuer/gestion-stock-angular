import { Component, OnInit } from '@angular/core';
import {MagasinService} from "../../../controller/service/magasin.service";
import {Magasin} from "../../../controller/model/magasin/magasin.model";
import {Stock} from "../../../controller/model/magasin/stock.model";


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
  get foundedMagasin(): Magasin {
    return this.magasinService.foundedMagasin;
  }
  public findByReference(reference: string) {
    if (reference == null ){
      alert('please enter a reference of magasin');
    } else {
      this.magasinService.findByReference(reference);
    }
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
  get loadedStock(): Stock {
    return this.magasinService.loadedStock;
  }
  public addProductToMagasin(refStock: string, refMag: string, refProd: string, quantiteMax: number, quantite: number) {
    this.magasinService.addProductToMagasin(refStock, refMag, refProd, quantiteMax, quantite);
  }
  public removeProductFromMagasin(refMag: string, refProd: string, quantiteToRemove: number) {
    this.magasinService.removeProductFromMagasin(refMag, refProd, quantiteToRemove);
  }
}
