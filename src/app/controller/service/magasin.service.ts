import { Injectable } from '@angular/core';

import {HttpClient} from "@angular/common/http";
import {EntiteAdministrativeService} from "./entite-administrative.service";
import {Magasin} from "../model/magasin/magasin.model";
import {Stock} from "../model/magasin/stock.model";


@Injectable({
  providedIn: 'root'
})
export class MagasinService {

  private _magasin: Magasin;
  private _magasins: Array<Magasin>;
  private url = 'http://localhost:8090/gestion-stock-v1/Magasin/';
  private _foundedMagasin = new Magasin();
  private _foundedStocks = new Array<Stock>();
  private _loadedStock = new Stock();
  constructor(private http: HttpClient, private entiteAdministrativeService: EntiteAdministrativeService) { }

  public save() {
    this.http.post<number>(this.url, this.magasin).subscribe(
      data => {
        if (data > 0) {
          this.magasins.push(this.cloneMagasin(this.magasin));
          this.magasin = null;
          console.log('success mag saved');
        } else {
          console.log('the reference of magasin existe alredy or the ref of entiteAd is not valid');
          alert('the reference of magasin existe alredy or the ref of entiteAd is not valid');
        }

      }, error => {
        console.log('erorrrororororororor mag not save ');
        alert('please fill out the form');
      }
    );

  }
  public deleteByReferenceFromView(magasin: Magasin){
    const index = this._magasins.findIndex(c => c.reference === magasin.reference);
    if (index !== 1 ) {
      this._magasins.splice(index, 1);
    }
  }
  public deleteByReference(magasin: Magasin) {
    console.log('hada howa ref dial lmagasin li dazt bach deleta ' + magasin.reference);
    this.http.delete(this.url + 'delete/' + magasin.reference).subscribe(
      data => {
        if (data > 0) {
          this.deleteByReferenceFromView(magasin);
          console.log('success magasin deleted nbrStock+Mag= ' + data );
          alert('success magasin deleted nbrStock+Mag= ' + data);
        }
      }, error => {
        console.log('magasin not deleted');
        alert('magasin not deleted');
      }
    );
  }
  public findAll() {
    this.http.get<Array<Magasin>>(this.url + 'findAll').subscribe(
      data => {
        if (data != null) {
          console.log('success  ALL magasins founded');
          this.magasins = data ;
        } else {
          console.log('pas de magasin dans la base de donnees');
          this.magasins = data ;
        }
      }, error => {
        console.log('error mal9Ach les Magasins');
      }
    );
  }

  public findByReference(reference: string) {
    this.http.get<Magasin>(this.url + 'reference/' + reference).subscribe(
      data => {
        if (data != null) {
          this._foundedMagasin = data ;
          console.log('success mag founded');
        } else {
          alert('reference not valid');
          console.log('mag not founded');
        }
      }, error => {
        console.log('mag not founded');
        alert('magasin not founded');
      }
    );
  }
  public findStockByMagasin(reference: string) {
    this.http.get<Array<Stock>>(this.url + 'stocksMagasin/refMagasin/' + reference).subscribe(
      data => {
        if (data != null) {
          this.foundedStocks = data ;
          console.log('success stocks founded');
        } else {
          alert('stock of this magasin is Empty');
        }
      }, error => {
        console.log('stock not founded');
        alert('stock not founded');
      }
    );
  }
  public addProductToMagasin(refStock: string, refMag: string, refProd: string, quantiteMax: number, quantite: number) {
    this.http.put<number>(this.url + 'addProducts/refStock/' + refStock + '/refProd/' + refProd + '/refMag/' + refMag + '/quantiteMaxProdInMag/' + quantiteMax + '/quantite/' + quantite , this.loadedStock).subscribe(
      data => {
        if (data > 0) {
          console.log('success product added');
          alert('success');
        } else {
          console.log('magasin or product not found or the the amount of input is too much');
          alert('magasin or product not found the amount of input is too much');
        }
      }, error => {
        console.log('error product not added');
        alert('error product not added');
      }
    );
  }

  public removeProductFromMagasin(refMag: string, refProd: string, quantiteToRemove: number) {
    this.http.put<number>(this.url + 'removeProductsFromMagasin/refMag/' + refMag + '/refProd/' + refProd + '/quantiteToRemove/' + quantiteToRemove , this.loadedStock).subscribe(
      data => {
        if (data > 0) {
          console.log('success product removed');
          alert('success the quantity is removed');
        } else {
          console.log('la quantity not removed');
          alert('the amount of input is too much');
        }
      }, error => {
        console.log('error ');
        alert('error ');
      }
    );
  }
  public validateSave(): boolean {
    return this.magasin.reference != null && this.magasin.nom != null && this.magasin.refEntite != null && this.magasin.nbrMaxEmploye != null && this.magasin.nbrMAxProduit != null  ;
  }


  get loadedStock(): Stock {
    return this._loadedStock;
  }

  set loadedStock(value: Stock) {
    this._loadedStock = value;
  }

  get foundedStocks(): Stock[] {
    return this._foundedStocks;
  }

  set foundedStocks(value: Stock[]) {
    this._foundedStocks = value;
  }

  get foundedMagasin(): Magasin {
    return this._foundedMagasin;
  }

  set foundedMagasin(value: Magasin) {
    this._foundedMagasin = value;
  }

  get magasins(): Array<Magasin> {
    if (this._magasins == null) {
      this._magasins = new Array<Magasin>();
    }
    return this._magasins;
  }

  set magasins(value: Array<Magasin>) {
    this._magasins = value;
  }

  get magasin(): Magasin {
    if (this._magasin == null) {
      this._magasin = new Magasin();
    }
    return this._magasin;
  }

  set magasin(value: Magasin) {
    this._magasin = value;
  }

  private cloneMagasin(_mmagasin: Magasin) {
    const myClone = new Magasin();
    myClone.reference = _mmagasin.reference;
    myClone.nom = _mmagasin.nom;
    myClone.nbrMAxProduit = _mmagasin.nbrMAxProduit;
    myClone.nbrMaxEmploye = _mmagasin.nbrMaxEmploye;
    myClone.nbrProduit = _mmagasin.nbrProduit;
    myClone.nbremploye = _mmagasin.nbremploye;
    myClone.refEntite = _mmagasin.refEntite;
    return myClone;
  }

}
