import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Familleproduit} from '../model/produit/familleproduit.model';
import {Fournisseur} from '../model/produit/fournisseur.model';
import {Produit} from '../model/magasin/produit.model';

@Injectable({
  providedIn: 'root'
})
export class FamilleProduitService {

  constructor(private http: HttpClient) { }
  private _familleProduit: Familleproduit;
  private _familleProduits: Array<Familleproduit>;
  private _produit: Produit;
  private _produitsByLibelle = new Array<Produit>();
  private _produitByLibelle = new Produit();

  get familleProduit(): Familleproduit {
    if (this._familleProduit == null) {
      this._familleProduit = new Familleproduit();
    }
    return this._familleProduit;
  }

  set familleProduit(value: Familleproduit) {
    this._familleProduit = value;
  }


  get familleProduits(): Array<Familleproduit> {
    if (this._familleProduits == null) {
      this._familleProduits = new Array<Familleproduit>();
    }
    return this._familleProduits;
  }

  set familleProduits(value: Array<Familleproduit>) {
    this._familleProduits = value;
  }


  get produit(): Produit {
    if (this._produit == null) {
      this._produit = new Produit();
    }
    return this._produit;
  }

  set produit(value: Produit) {
    this._produit = value;
  }


  get produitsByLibelle(): Produit[] {
    return this._produitsByLibelle;
  }

  set produitsByLibelle(value: Produit[]) {
    this._produitsByLibelle = value;
  }


  get produitByLibelle(): Produit {
    return this._produitByLibelle;
  }

  set produitByLibelle(value: Produit) {
    this._produitByLibelle = value;
  }

  private clone(produit: Produit): Produit {
    const clone = new Produit();
    clone.reference = produit.reference;
    clone.libelle = produit.libelle;
    clone.prixUnitaireHT = produit.prixUnitaireHT;
    clone.tauxTVA = produit.tauxTVA;
    clone.prixUnitaireTTC = produit.prixUnitaireTTC;
    return clone;
  }

  public addProduit() {
    this.produit.prixUnitaireTTC = this.produit.prixUnitaireHT * ((this.produit.tauxTVA / 100) + 1);
    this.produit.tva = (this.produit.prixUnitaireHT * this.produit.tauxTVA) / 100;
    this.familleProduit.produits.push(this.clone(this.produit));
    this.produit = null;
  }

  private cloneFamilleProduit(familleproduit: Familleproduit): Familleproduit {
    const clone = new Familleproduit();
    clone.libelle = familleproduit.libelle;
    return clone;
  }

  public save() {
    this.http.post<number>('http://localhost:8090/FamilleProduit-stock/familleProduit/', this.familleProduit).subscribe(
      data => {
        if (data > 0) {
          this.familleProduits.push(this.cloneFamilleProduit(this.familleProduit));
          this.familleProduit = null;
        }
      }, error => {
        console.log('erreur');
    }
    );
  }

  public findByProduitLibelle(libelle: string): Array<Produit> {
    this.http.get<Array<Produit>>('http://localhost:8090/produit-api/produit/familleProduit/libelle/' + libelle).subscribe(
      data => {
        this.produitsByLibelle = data;
      }
    );
    return this.produitsByLibelle;
}

  public findAll() {
    this.http.get<Array<Familleproduit>>('http://localhost:8090/FamilleProduit-stock/familleProduit/').subscribe(
      data => {
        this.familleProduits = data;
      }
    );
  }

  public deleteByLibelleFromView(familleProduit: Familleproduit) {
    const index = this.familleProduits.findIndex(c => c.libelle === familleProduit.libelle);
    if (index !== -1) {
      this.familleProduits.splice(index, 1);
    }
  }

  public deleteBylibelle(familleProduit: Familleproduit) {
    this.http.delete<number>('http://localhost:8090/FamilleProduit-stock/familleProduit/libelle/' + familleProduit.libelle).subscribe(
      data => {
        console.log('mzyan');
        this.deleteByLibelleFromView(familleProduit);
      }
    );
  }
}
