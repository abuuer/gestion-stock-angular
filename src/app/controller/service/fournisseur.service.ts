import { Injectable } from '@angular/core';
import {Fournisseur} from "../model/produit/fournisseur.model";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FournisseurService {

  private _fournisseur: Fournisseur;
  private _fournisseurs: Array<Fournisseur>;
  private _fournisseurSearch=new Fournisseur();
  private _fournisseursLike = new Array<Fournisseur>();
  private _fournisseurLike = new Fournisseur();

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


  get fournisseurLike(): Fournisseur {
    return this._fournisseurLike;
  }

  set fournisseurLike(value: Fournisseur) {
    this._fournisseurLike = value;
  }

  get fournisseursLike(): Fournisseur[] {
    return this._fournisseursLike;
  }

  set fournisseursLike(value: Fournisseur[]) {
    this._fournisseursLike = value;
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

public findByReferenceLike(ref: string): Array<Fournisseur> {
   this.http.get<Array<Fournisseur>>('http://localhost:8090/Fournisseur-stock/fournisseur/reference/like/' + ref).subscribe(
    data => {
      if (data != null) {
        this.fournisseursLike = data;
      } else {
        alert('ce fournisseur existe pas');
      }
    }
   );
   return this.fournisseursLike;
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
