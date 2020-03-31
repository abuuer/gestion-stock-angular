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
    console.log(this._magasin);
    this._magasin.entiteAdministrative = this.entiteAdministrativeService.findByReference(this._magasin.refEntite);
    console.log(this._magasin);
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
