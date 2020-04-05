import { Injectable } from '@angular/core';

import {HttpClient} from "@angular/common/http";
import {Fournisseur} from "../model/produit/fournisseur.model";

@Injectable({
  providedIn: 'root'
})
export class FournisseurService {

  private _fournisseur: Fournisseur;
  private _fournisseurs: Array<Fournisseur>;
  private _fournisseurSearch=new Fournisseur();

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


  get fournisseurSearch(): Fournisseur {
    return this._fournisseurSearch;
  }

  set fournisseurSearch(value: Fournisseur) {
    this._fournisseurSearch = value;
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
          this.fournisseur = null;
        } else {alert('la reference deja exist');
        }
      }, error =>  {
        console.log('erreur');
      }

    );
  }
public findByReference(ref: string): Fournisseur {
    this.http.get<Fournisseur>('http://localhost:8090/Fournisseur-stock/fournisseur/reference/' + ref).subscribe(
      data => {
        if (data != null) {
          this.fournisseurSearch = data;
        } else {
          alert('ce fournisseur existe pas');
        }
      }
    );
    return this.fournisseurSearch;
}
  public findAll() {
    this.http.get<Array<Fournisseur>>('http://localhost:8090/Fournisseur-stock/fournisseur/').subscribe(
      data => {
        this.fournisseurs = data;
      }
    );
  }

  public deleteByReferenceFromView(fournisseur: Fournisseur) {
    const index = this.fournisseurs.findIndex(c => c.reference === fournisseur.reference);
    if (index !== -1) {
      this.fournisseurs.splice(index, 1);
    }
  }

  public deleteByReference(fournisseur: Fournisseur) {
    this.http.delete<number>('http://localhost:8090/Fournisseur-stock/fournisseur/reference/' + fournisseur.reference).subscribe(
      data => {
        console.log('mzyan');
        this.deleteByReferenceFromView(fournisseur);
      }
    );
  }

  public validateFournisseur(): boolean {
    return this.fournisseur.reference != null && this.fournisseur.nom != null && this.fournisseur.mail != null;
  }
}
