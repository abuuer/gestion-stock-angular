import {Injectable} from '@angular/core';
import {Produit} from "../model/produit.model";
import {HttpClient} from "@angular/common/http";
import {Familleproduit} from "../model/familleproduit.model";

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  private _produit: Produit;
  private _produits: Array<Produit>;
  private _familleProduit: Familleproduit;
  private url = 'http://localhost:8090/produit-api/produit/';
  private _foundedProduit: Produit;

  constructor(private http: HttpClient) {
  }


  get foundedProduit(): Produit {
    if (this._foundedProduit == null) {
      this._foundedProduit = new Produit();
    }
    return this._foundedProduit;
  }

  set foundedProduit(value: Produit) {
    this._foundedProduit = value;
  }

  get familleProduit(): Familleproduit {
    return this._familleProduit;
  }

  set familleProduit(value: Familleproduit) {
    this._familleProduit = value;
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

  get produits(): Array<Produit> {
    if (this._produits == null) {
      this._produits = new Array<Produit>();
    }
    return this._produits;
  }

  set produits(value: Array<Produit>) {
    this._produits = value;
  }

  public findAll() {
    this.http.get<Array<Produit>>(this.url).subscribe(
      data => {
        this.produits = data;
      }, error => {

      }
    );
  }

  public save() {
    console.log(this.produit.familleProduit.libelle);
    this.http.post<number>(this.url, this.produit).subscribe(
      data => {
        if (data > 0) {

          this.produits.push(this.clone(this.produit))
          this.produit = null;
          console.log("ha data " + data);
        }

      }, error => {
        console.log("eror");
        console.log(this.url);
        console.log(error);


      }
    )
  }


  private clone(produit: Produit) {
    const myCloneProduit = new Produit();
    myCloneProduit.reference = produit.reference;
    myCloneProduit.libelle = produit.libelle;
    myCloneProduit.prixUnitaireHT = produit.prixUnitaireHT;
    myCloneProduit.prixUnitaireTTC = produit.prixUnitaireTTC;
    myCloneProduit.tauxTVA = produit.tauxTVA;
    // myCloneProduit.familleproduit.libelle=produit.familleproduit.libelle;

    return myCloneProduit;
  }

  public deleteByRefrence(produit: Produit) {

    this.http.delete<number>(this.url + 'reference/' + produit.reference).subscribe(
      data => {
        console.log(data);
        this.deleteByRefrenceFromView(produit);

      }, error => {

      }
    );
  }

  private deleteByRefrenceFromView(produit: Produit) {
    const index = this.produits.findIndex(p => p.reference === produit.reference);
    // tslint:disable-next-line:triple-equals
    if (index != -1) {
      this.produits.splice(index, 1);
    }
  }

  getCategory(p: Produit) {

  }


  findByReference(reference: string): Produit {
    console.log("Lien : " +this.url + 'reference/' + reference);
    console.log("ha refrence f service :" + reference);
    this.http.get<Produit>(this.url + 'reference/' + reference).subscribe(
      data => {
        console.log(data);
        this.foundedProduit = data;


      }, error => {
        console.log("error"+error);


      }
    )
    return this.foundedProduit;
  }


}

