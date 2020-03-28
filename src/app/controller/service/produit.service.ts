import { Injectable } from '@angular/core';
import {Fournisseur} from "../model/produit/fournisseur.model";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
   private _fournisseur: Fournisseur;
   private _fournisseurs: Array<Fournisseur>;
  constructor(private http: HttpClient) { }
  get fournisseur(): Fournisseur {
    if (this._fournisseur == null) {
      this._fournisseur = new Fournisseur();
    }
    return this._fournisseur;
  }

  set fournisseur(value: Fournisseur) {
    this._fournisseur = value;
  }


  get fournisseurs(): Array<Fournisseur> {
    if (this._fournisseurs == null) {
      this._fournisseurs = new Array<Fournisseur>();
    }
    return this._fournisseurs;
  }

  set fournisseurs(value: Array<Fournisseur>) {
    this._fournisseurs = value;
  }
   private clone(fournisseur: Fournisseur): Fournisseur {
     const clone = new Fournisseur();
     clone.reference = fournisseur.reference;
     clone.nom = fournisseur.nom;
     clone.telephone = fournisseur.telephone;
     clone.mail = fournisseur.mail;
     clone.ville = fournisseur.ville;
     clone.adresse = fournisseur.adresse;
     return clone;
   }
  public save() {
    this.http.post<number>('http://localhost:8090/Fournisseur-stock/fournisseur/', this.fournisseur).subscribe(
      data => {
            if (data > 0) {
                this.fournisseurs.push(this.clone(this.fournisseur));
            }
      }, error =>  {
        console.log('erreur');
      }

    );
  }

  public validateFournisseur(): boolean {
    return this.fournisseur.reference != null && this.fournisseur.nom != null && this.fournisseur.mail != null;
  }

}
