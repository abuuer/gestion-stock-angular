import { Injectable } from '@angular/core';
import {Magasin} from "../model/magasin/magasin.model";
import {HttpClient} from "@angular/common/http";
import {EntiteAdministrativeService} from "./entite-administrative.service";


@Injectable({
  providedIn: 'root'
})
export class MagasinService {

  private _magasin: Magasin;
  private _magasins: Array<Magasin>;
  private url = 'http://localhost:8090/gestion-stock-v1/Magasin/';
  constructor(private http: HttpClient, private entiteAdministrativeService: EntiteAdministrativeService) { }

  public save() {
    this.http.post<number>(this.url, this._magasin).subscribe(
      data => {
        if (data > 0) {
          this._magasins.push(this.cloneMagasin(this._magasin));
          this._magasin = null;
          console.log('success mag saved');
        }

      }, error => {
        console.log('erorrrororororororor mag not save ');
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
          console.log('success delete magasin');
          this.deleteByReferenceFromView(magasin);
        }
      }, error => {
        console.log('magasin not deleted');
      }
    );
  }
  public findAll() {
    this.http.get<Array<Magasin>>(this.url + 'findAll').subscribe(
      data => {
        console.log('success  ALL magasins founded');
        this.magasins = data ;
      }, error => {
        console.log('error mal9Ach les Magasins');
      }
    );
  }
  public validateSave(): boolean {
    return this.magasin.reference != null && this.magasin.nom != null && this.magasin.refEntite != null ;
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
